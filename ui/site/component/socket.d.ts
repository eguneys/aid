/// <reference types="uichest" />
declare type Sri = string;
declare type Tpe = string;
declare type Version = number;
declare type Payload = any;
interface MsgBase {
    t: Tpe;
    d?: Payload;
}
interface MsgIn extends MsgBase {
    v?: Version;
}
interface MsgOut extends MsgBase {
}
interface MsgAck extends MsgOut {
    at: number;
}
declare type Send = (t: Tpe, d: Payload, o?: any) => void;
interface Options {
    idle: boolean;
    pingMaxLag: number;
    pingDelay: number;
    autoReconnectDelay: number;
    protocol: string;
    isAuth: boolean;
    debug?: boolean;
}
interface Params {
    sri: Sri;
}
interface Settings {
    receive?: (t: Tpe, d: Payload) => void;
    events: {
        [tpe: string]: (d: Payload | null, msg: MsgIn) => any;
    };
    params?: Params;
    options?: Partial<Options>;
}
export default class StrongSocket {
    readonly url: string;
    settings: Settings;
    options: Options;
    version: number | false;
    ws: WebSocket | undefined;
    pingSchedule: Timeout;
    connectSchedule: Timeout;
    ackable: Ackable;
    lastPingTime: number;
    pongCount: number;
    averageLag: number;
    autoReconnect: boolean;
    nbConnects: number;
    static defaultOptions: Options;
    static defaultParams: Params;
    static resolveFirstConnect: (send: Send) => void;
    static firstConnect: Promise<Send>;
    constructor(url: string, version: number | false, settings?: Partial<Settings>);
    connect: () => void;
    send: (t: string, d: any, o?: any, noRetry?: boolean) => void;
    scheduleConnect: (delay: number) => void;
    schedulePing: (delay: number) => void;
    pingNow: () => void;
    computePingDelay: () => number;
    pong: () => void;
    handle: (m: MsgIn) => void;
    debug: (msg: string, always?: boolean) => void;
    destroy: () => void;
    disconnect: () => void;
    onError: (e: Event) => void;
    onSuccess: () => void;
    baseUrl: () => string;
    pingInterval: () => number;
    getVersion: () => number | false;
}
declare class Ackable {
    readonly send: Send;
    currentId: number;
    messages: MsgAck[];
    constructor(send: Send);
    resend: () => void;
    register: (t: Tpe, d: Payload) => void;
    onServerAck: (id: number) => void;
}
export {};
