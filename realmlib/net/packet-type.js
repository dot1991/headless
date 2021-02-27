"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketType = void 0;
/**
 * A strongly typed representation of the packet types.
 */
var PacketType;
(function (PacketType) {
    PacketType["FAILURE"] = "FAILURE";
    PacketType["CREATE_SUCCESS"] = "CREATE_SUCCESS";
    PacketType["CREATE"] = "CREATE";
    PacketType["PLAYERSHOOT"] = "PLAYERSHOOT";
    PacketType["MOVE"] = "MOVE";
    PacketType["CHATTOKEN"] = "CHATTOKEN";
    PacketType["CHATHELLO"] = "CHATHELLO";
    PacketType["PLAYERTEXT"] = "PLAYERTEXT";
    PacketType["TEXT"] = "TEXT";
    PacketType["SERVERPLAYERSHOOT"] = "SERVERPLAYERSHOOT";
    PacketType["DAMAGE"] = "DAMAGE";
    PacketType["UPDATE"] = "UPDATE";
    PacketType["UPDATEACK"] = "UPDATEACK";
    PacketType["NOTIFICATION"] = "NOTIFICATION";
    PacketType["NEWTICK"] = "NEWTICK";
    PacketType["INVSWAP"] = "INVSWAP";
    PacketType["USEITEM"] = "USEITEM";
    PacketType["SHOWEFFECT"] = "SHOWEFFECT";
    PacketType["HELLO"] = "HELLO";
    PacketType["GOTO"] = "GOTO";
    PacketType["INVDROP"] = "INVDROP";
    PacketType["INVRESULT"] = "INVRESULT";
    PacketType["RECONNECT"] = "RECONNECT";
    PacketType["PING"] = "PING";
    PacketType["PONG"] = "PONG";
    PacketType["MAPINFO"] = "MAPINFO";
    PacketType["LOAD"] = "LOAD";
    PacketType["PIC"] = "PIC";
    PacketType["SETCONDITION"] = "SETCONDITION";
    PacketType["TELEPORT"] = "TELEPORT";
    PacketType["USEPORTAL"] = "USEPORTAL";
    PacketType["DEATH"] = "DEATH";
    PacketType["BUY"] = "BUY";
    PacketType["BUYRESULT"] = "BUYRESULT";
    PacketType["AOE"] = "AOE";
    PacketType["GROUNDDAMAGE"] = "GROUNDDAMAGE";
    PacketType["PLAYERHIT"] = "PLAYERHIT";
    PacketType["ENEMYHIT"] = "ENEMYHIT";
    PacketType["AOEACK"] = "AOEACK";
    PacketType["SHOOTACK"] = "SHOOTACK";
    PacketType["OTHERHIT"] = "OTHERHIT";
    PacketType["SQUAREHIT"] = "SQUAREHIT";
    PacketType["GOTOACK"] = "GOTOACK";
    PacketType["EDITACCOUNTLIST"] = "EDITACCOUNTLIST";
    PacketType["ACCOUNTLIST"] = "ACCOUNTLIST";
    PacketType["QUESTOBJID"] = "QUESTOBJID";
    PacketType["CHOOSENAME"] = "CHOOSENAME";
    PacketType["NAMERESULT"] = "NAMERESULT";
    PacketType["CREATEGUILD"] = "CREATEGUILD";
    PacketType["GUILDRESULT"] = "GUILDRESULT";
    PacketType["GUILDREMOVE"] = "GUILDREMOVE";
    PacketType["GUILDINVITE"] = "GUILDINVITE";
    PacketType["ALLYSHOOT"] = "ALLYSHOOT";
    PacketType["ENEMYSHOOT"] = "ENEMYSHOOT";
    PacketType["REQUESTTRADE"] = "REQUESTTRADE";
    PacketType["TRADEREQUESTED"] = "TRADEREQUESTED";
    PacketType["TRADESTART"] = "TRADESTART";
    PacketType["CHANGETRADE"] = "CHANGETRADE";
    PacketType["TRADECHANGED"] = "TRADECHANGED";
    PacketType["ACCEPTTRADE"] = "ACCEPTTRADE";
    PacketType["CANCELTRADE"] = "CANCELTRADE";
    PacketType["TRADEDONE"] = "TRADEDONE";
    PacketType["TRADEACCEPTED"] = "TRADEACCEPTED";
    PacketType["CLIENTSTAT"] = "CLIENTSTAT";
    PacketType["CHECKCREDITS"] = "CHECKCREDITS";
    PacketType["ESCAPE"] = "ESCAPE";
    PacketType["FILE"] = "FILE";
    PacketType["INVITEDTOGUILD"] = "INVITEDTOGUILD";
    PacketType["JOINGUILD"] = "JOINGUILD";
    PacketType["CHANGEGUILDRANK"] = "CHANGEGUILDRANK";
    PacketType["PLAYSOUND"] = "PLAYSOUND";
    PacketType["GLOBAL_NOTIFICATION"] = "GLOBAL_NOTIFICATION";
    PacketType["RESKIN"] = "RESKIN";
    PacketType["PETUPGRADEREQUEST"] = "PETUPGRADEREQUEST";
    PacketType["ACTIVE_PET_UPDATE_REQUEST"] = "ACTIVE_PET_UPDATE_REQUEST";
    PacketType["ACTIVEPETUPDATE"] = "ACTIVEPETUPDATE";
    PacketType["NEW_ABILITY"] = "NEW_ABILITY";
    PacketType["PETYARDUPDATE"] = "PETYARDUPDATE";
    PacketType["EVOLVE_PET"] = "EVOLVE_PET";
    PacketType["DELETE_PET"] = "DELETE_PET";
    PacketType["HATCH_PET"] = "HATCH_PET";
    PacketType["ENTER_ARENA"] = "ENTER_ARENA";
    PacketType["IMMINENT_ARENA_WAVE"] = "IMMINENT_ARENA_WAVE";
    PacketType["ARENA_DEATH"] = "ARENA_DEATH";
    PacketType["ACCEPT_ARENA_DEATH"] = "ACCEPT_ARENA_DEATH";
    PacketType["VERIFY_EMAIL"] = "VERIFY_EMAIL";
    PacketType["RESKIN_UNLOCK"] = "RESKIN_UNLOCK";
    PacketType["PASSWORD_PROMPT"] = "PASSWORD_PROMPT";
    PacketType["QUEST_FETCH_ASK"] = "QUEST_FETCH_ASK";
    PacketType["QUEST_REDEEM"] = "QUEST_REDEEM";
    PacketType["QUEST_FETCH_RESPONSE"] = "QUEST_FETCH_RESPONSE";
    PacketType["QUEST_REDEEM_RESPONSE"] = "QUEST_REDEEM_RESPONSE";
    PacketType["PET_CHANGE_FORM_MSG"] = "PET_CHANGE_FORM_MSG";
    PacketType["KEY_INFO_REQUEST"] = "KEY_INFO_REQUEST";
    PacketType["KEY_INFO_RESPONSE"] = "KEY_INFO_RESPONSE";
    PacketType["CLAIM_LOGIN_REWARD_MSG"] = "CLAIM_LOGIN_REWARD_MSG";
    PacketType["LOGIN_REWARD_MSG"] = "LOGIN_REWARD_MSG";
    PacketType["QUEST_ROOM_MSG"] = "QUEST_ROOM_MSG";
    PacketType["PET_CHANGE_SKIN_MSG"] = "PET_CHANGE_SKIN_MSG";
    PacketType["REALM_HERO_LEFT_MSG"] = "REALM_HERO_LEFT_MSG";
    PacketType["RESET_DAILY_QUESTS"] = "RESET_DAILY_QUESTS";
    PacketType["NEW_CHARACTER_INFORMATION"] = "NEW_CHARACTER_INFORMATION";
    PacketType["UNLOCK_INFORMATION"] = "UNLOCK_INFORMATION";
    PacketType["QUEUE_INFORMATION"] = "QUEUE_INFORMATION";
    PacketType["QUEUE_CANCEL"] = "QUEUE_CANCEL";
    PacketType["VAULT_UPDATE"] = "VAULT_UPDATE";
    PacketType["EXALTATION_BONUS_CHANGED"] = "EXALTATION_BONUS_CHANGED";
    PacketType["REDEEM_EXALTATION_REWARD"] = "REDEEM_EXALTATION_REWARD";
    PacketType["FORGE_REQUEST"] = "FORGE_REQUEST";
    PacketType["FORGE_RESULT"] = "FORGE_RESULT";
    PacketType["FORGE_UNLOCKED_BLUEPRINTS"] = "FORGE_UNLOCKED_BLUEPRINTS";
    PacketType["CHANGE_ALLYSHOOT"] = "CHANGE_ALLYSHOOT";
})(PacketType = exports.PacketType || (exports.PacketType = {}));