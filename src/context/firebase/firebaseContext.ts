import React from 'react'
import { IFirebase } from './firebaseTypes';

interface IFirebaseContext {
    showLoader: () => void;
    addTodo: (val: string) => Promise<void>;
    fetchTodos: () => Promise<void>;
    removeTodo: (id: number) => Promise<void>;
    firebaseState: IFirebase;
}

export const FirebaseContext = React.createContext<IFirebaseContext>({} as IFirebaseContext);