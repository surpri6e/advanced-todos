export type TAlertType = 'warning' | 'success' | 'danger';

export interface IAlert {
    title: string;
    text: string;
    type: TAlertType;
    visible: boolean;
}