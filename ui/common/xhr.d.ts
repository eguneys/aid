export declare const defaultInit: RequestInit;
export declare const xhrHeader: {
    'X-Requested-With': string;
};
export declare const json: (url: string, init?: RequestInit) => Promise<any>;
export declare const form: (data: any) => FormData;
