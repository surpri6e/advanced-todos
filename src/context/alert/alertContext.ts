import React from 'react'
import { IAlert, TAlertType } from '../../types/IAlert'

interface IAlertContext {
    show: (text: string, type: TAlertType) => void;
    hide: () => void;
    alert: IAlert;
}


export const AlertContext = React.createContext<IAlertContext | undefined>(undefined);