import { IAlert } from "../../types/IAlert";
import { IAlertAction } from "./alertTypes";

export const alertReducer = (state: IAlert, action: IAlertAction): IAlert => {
    switch(action.type) {
        case 'HIDE_ALERT': 
            return {...state, visible: false};
        case 'SHOW_ALERT': 
            return {...state, ...action.payload, visible: true};
        default: 
            return state;
    }
}