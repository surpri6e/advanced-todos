import axios from 'axios';
import React from 'react'
import { ITodo } from '../../types/ITodo';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';


interface FirebaseStateProps {
  children: React.ReactNode | React.ReactChild;
}

const URL: string = process.env.REACT_APP_DB_URL!;

const FirebaseState: React.FC<FirebaseStateProps> = ({children}) => {

  const [state, dispatch] = React.useReducer(firebaseReducer, {todos: [], loading: false})

  const showLoader = () => {
    dispatch({type: 'SHOW_LOADER', payload: {...state}})
  }

  const fetchTodos = async () => {
    showLoader();
    const result = await axios.get(`${URL}/todos.json`);
    console.log('fetchNotes', result.data);
    const todos: ITodo[] = Object.keys(result.data).map(key => ({...result.data[key]}))
    console.log(todos)
    dispatch({type: 'FETCH_NOTES', payload: {...state, todos: todos}})
  }

  const addTodo = async (val: string) => {
    const todo: ITodo = {
      id: Date.now(),
      completed: false,
      additional: 'New todo',
      potency: 3,
      time: 25,
      title: val,
    }

    try {
      const result = await axios.post(`${URL}/todos.json`, todo);
      dispatch({type: 'ADD_TODO', payload: {...state, todos: [todo]}})
      console.log(result.data);
    } catch (error) {
      throw new Error('gg')
    }

    
  }

  const removeTodo = async (id: number) => {
    await axios.delete(`${URL}/notes/${id}.json`);
    dispatch({type: 'DELETE_NOTE', payload: {...state}, id})
  }


  return (
      <FirebaseContext.Provider value={{firebaseState: state, showLoader, addTodo, removeTodo, fetchTodos}}>
        {children}
      </FirebaseContext.Provider>
  )
}

export default FirebaseState