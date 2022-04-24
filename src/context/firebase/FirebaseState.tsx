import axios from 'axios';
import React from 'react'
import { INumberly } from '../../components/Form';
import { ITodo } from '../../types/ITodo';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';


interface FirebaseStateProps {
  children: React.ReactNode | React.ReactChild;
}

const email: string = sessionStorage.length ? JSON.parse(sessionStorage.getItem('data')!).email.split('').map((s: string) => s === '.' ? '__' : s).join('') : '';
const URL: string = `${process.env.REACT_APP_DB_URL!}/${email}`;

const FirebaseState: React.FC<FirebaseStateProps> = ({children}) => {


  const [state, dispatch] = React.useReducer(firebaseReducer, {todos: [], loading: false})

  const showLoader = () => {
    dispatch({type: 'SHOW_LOADER', payload: {...state}})
  }

  const fetchTodos = async () => {
    showLoader();
    const result = await axios.get(`${URL}/todos.json`);
    console.log('fetchNotes', result.data);
    const todos: ITodo[] = Object.keys(result.data).map(key => ({...result.data[key], key}))
    console.log(todos)
    dispatch({type: 'FETCH_NOTES', payload: {...state, todos: todos}})
  }

  const addTodo = async (val: string, add: string, numberly: INumberly) => {
    const todo: ITodo = {
      id: Date.now(),
      completed: false,
      additional: add,
      potency: numberly.potency,
      time: numberly.time,
      title: val,
    }

    try {
      const result = await axios.post(`${URL}/todos.json`, todo);
      const key: string = result.data.name;
      todo.key = key
      dispatch({type: 'ADD_TODO', payload: {...state, todos: [todo]}, })
      console.log(result.data);
    } catch (error) {
      throw new Error('gg')
    }

    
  }

  const removeTodo = async (key: string, id: number) => {
    await axios.delete(`${URL}/todos/${key}.json`);
    console.log(key, id)
    dispatch({type: 'DELETE_NOTE', payload: {...state}, id})
  }


  return (
      <FirebaseContext.Provider value={{firebaseState: state, showLoader, addTodo, removeTodo, fetchTodos}}>
        {children}
      </FirebaseContext.Provider>
  )
}

export default FirebaseState