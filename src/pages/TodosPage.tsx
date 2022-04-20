import React from 'react'
import Form from '../components/Form';
import Todos from '../components/Todos';
import { FirebaseContext } from '../context/firebase/firebaseContext';
import FirebaseState from '../context/firebase/FirebaseState';

const TodosPage = () => {

  //! ВОТ ИЗ-ЗА ЧЕГО ВОЗНИКАЕТ ОШИБКА
  // const {firebaseState} = React.useContext(FirebaseContext)
  // console.log(firebaseState)

  return (
    <div className='container'>
        <h1 className='display-4 fw-bold text-decoration-underline'>Main</h1>
        <Form/>
        <hr/>
        <p className='font-monospace fw-700 fs-14 text-center mt-5 text-decoration-underline'>Your Books</p>
        <Todos/> 
  </div>
  )
}

export default TodosPage;