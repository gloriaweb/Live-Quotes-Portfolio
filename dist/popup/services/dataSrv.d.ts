import { SendMsgSrv } from "./sendMsg";
import { Observable } from "rxjs/Observable";
export declare class DataSrv {
    private _sendMsg;
    constructor(_sendMsg: SendMsgSrv);
    getData(): void;
    onData(): Observable<any>;
    add(symbols: Array<string>): void;
    del(symbol: string): void;
    update(msg: any): void;
}