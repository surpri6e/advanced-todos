import { ITodo } from "../../types/ITodo";

export type TFirebaseActionType = 'HIDE_ALERT' | 'SHOW_ALERT' | 'SHOW_LOADER' | 'ADD_TODO' | 'FETCH_NOTES' | 'DELETE_NOTE';

export interface IFirebase {
    todos: ITodo[];
    loading: boolean;
}

export interface IFirebaseAction {
    type: TFirebaseActionType;
    payload?: IFirebase;
    id?: number;
}