import {randomBytes} from 'crypto';
import {lookup as dnsLookup} from 'dns';
import {isIP} from 'net';
import {Logger, LogLevel} from '../core';
import {AccountInUseError, CharacterInfo, Proxy, SERVER_ENDPOINT} from '../models';
import {Environment, ServerList} from '../runtime';
import {HttpClient} from './http';
import * as xmlToJSON from './xmltojson';

const ACCOUNT_IN_USE_REGEX = /Account in use \((\d+) seconds? until timeout\)/;
const ERROR_REGEX = /<Error\/?>(.+)<\/?Error>/;

interface CharInfoCache {
    [guid: string]: CharacterInfo;
}

export class AccountService {
    constructor(readonly env: Environment) {
    }

    /**
     * Gets the list of servers available to connect to. This will
     * look in the cache first and will only make a web request if
     * the cache does not exist.
     */
    getServerList(): Promise<ServerList> {
        Logger.log('Accounts', 'Loading server list...', LogLevel.Debug);
        const cachedServerList = this.env.readJSON<ServerList>('servers.cache.json');
        if (cachedServerList) {
            Logger.log('Accounts', 'Cached server list loaded', LogLevel.Debug);
            return Promise.resolve(cachedServerList);
        } else {
            // if there is no cache, fetch the servers.
            // use a random guid here to avoid triggering an internal error
            const guid = randomBytes(6).toString('hex');
            return HttpClient.get(SERVER_ENDPOINT, {
                query: {
                    guid,
                },
            }).then((response) => {
                // check for errors.
                const maybeError = AccountService.getError(response);
                if (maybeError) {
                    throw maybeError;
                } else {
                    const servers: ServerList = xmlToJSON.parseServers(response);
                    Logger.log('Accounts', 'Server list loaded', LogLevel.Success);
                    // update the cache
                    this.env.writeJSON(servers, 'servers.cache.json');
                    return servers;
                }
            });
        }
    }

    /**
     * Gets the character info for the account with the guid/password provided.
     * This will look in the cache first, and it will only request the info
     * from the rotmg server if the char info was not found in the cache.
     * @param guid The guid of the account to get the character info of.
     * @param password The password of the account to get the character info of.
     * @param proxy An optional proxy to use when making the request.
     */
    getCharacterInfo(guid: string, password: string, proxy?: Proxy): Promise<CharacterInfo> {
        // look in the cache
        Logger.log('Accounts', 'Loading character info...', LogLevel.Info);
        const cachedCharInfo = this.env.readJSON<CharInfoCache>('char-info.cache.json');
        if (cachedCharInfo && cachedCharInfo.hasOwnProperty(guid)) {
            Logger.log('Accounts', 'Cached character info loaded', LogLevel.Success);
            return Promise.resolve(cachedCharInfo[guid]);
        } else {
            // if there is no cache, fetch the info.
            return HttpClient.get(SERVER_ENDPOINT, {
                proxy,
                query: {
                    guid, password,
                },
            }).then((response) => {
                // check for errors.
                const maybeError = AccountService.getError(response);
                if (maybeError) {
                    throw maybeError;
                }
                const charInfo = xmlToJSON.parseAccountInfo(response);
                Logger.log('Accounts', 'Character info loaded', LogLevel.Success);
                // update the cache.
                const cacheUpdate: CharInfoCache = {};
                cacheUpdate[guid] = charInfo;
                this.env.updateJSON(cacheUpdate, 'char-info.cache.json');
                return charInfo;
            });
        }
    }

    /**
     * Updates the cached character info for the account with the `guid`.
     * @param guid The guid of the account to update the cache of.
     * @param charInfo The new info to store in the cache.
     */
    updateCharInfoCache(guid: string, charInfo: CharacterInfo): void {
        const cacheUpdate: CharInfoCache = {};
        cacheUpdate[guid] = charInfo;
        this.env.updateJSON(cacheUpdate, 'char-info.cache.json');
        Logger.log('Accounts', 'Character info cache updated!', LogLevel.Success);
    }

    /**
     * Resolves a proxy hostname to ensure its `host` field
     * is always an IP instead of possibly a hostname.
     * @param proxy The proxy to resolve the hostname of.
     */
    resolveProxyHostname(proxy: Proxy): Promise<void> {
        if (isIP(proxy.host) === 0) {
            Logger.log('Accounts', 'Resolving proxy hostname', LogLevel.Info);
            return new Promise((resolve, reject) => {
                dnsLookup(proxy.host, (err, address) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    Logger.log('Accounts', 'Proxy hostname resolved', LogLevel.Success);
                    proxy.host = address;
                    resolve();
                });
            });
        } else {
            return Promise.resolve();
        }
    }

    private static getError(response: string): Error {
        // check for acc in use.
        const accInUse = ACCOUNT_IN_USE_REGEX.exec(response);
        if (accInUse) {
            return new AccountInUseError(parseInt(accInUse[1], 10));
        }
        // check for the generic <Error>some error</Error>
        const otherError = ERROR_REGEX.exec(response);
        if (otherError) {
            const error = new Error(otherError[1]);
            error.name = 'OTHER_ERROR';
            return error;
        }

        // no errors.
        return undefined;
    }
}
