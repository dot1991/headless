import { LibraryInfo } from './../models/plugin-info';
/**
 * A type which can be created using `new` syntax.
 * @example
 * function create<T>(type: Type<T>): T {
 *  return new type();
 * }
 */
export declare type Type<T> = new (...args: any[]) => T;
/**
 * A library which has been loaded using the `@Library` decorator.
 */
export interface LoadedLib<T> {
    info: LibraryInfo;
    target: Type<T>;
    dependencies: string[];
}
/**
 * A loaded library with an associated instance of it.
 */
export interface ManagedLib<T> {
    instance: T;
    info: LoadedLib<T>;
}
/**
 * A description of a packet hook defined in a library.
 */
export interface HookInfo<T> {
    target: string;
    method: string;
    packet: string;
    signature: HookParamType[];
}
/**
 * The types which can be used as hook method parameters.
 */
export declare const enum HookParamType {
    Other = 0,
    Packet = 1,
    Client = 2
}
