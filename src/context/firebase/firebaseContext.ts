import React from 'react'
import { INumberly } from '../../components/Form';
import { IFirebase } from './firebaseTypes';

interface IFirebaseContext {
    showLoader: () => void;
    addTodo: (val: string, add: string, numberly: INumberly) => Promise<void>;
    fetchTodos: () => Promise<void>;
    removeTodo: (key: string, id: number) => Promise<void>;
    firebaseState: IFirebase;
}

export const FirebaseContext = React.createContext<IFirebaseContext>({} as IFirebaseContext);