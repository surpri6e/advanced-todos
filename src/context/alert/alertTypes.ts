import { IAlert, TAlertType } from "../../types/IAlert";

export type TAlertActionType = 'HIDE_ALERT' | 'SHOW_ALERT';

interface IAlertPayload {
    title?: string;
    text?: string;
    type?: TAlertType;
    visible?: boolean;
}

export interface IAlertAction {
    type: TAlertActionType;
    payload?: IAlert; 
}