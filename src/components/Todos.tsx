import React from 'react'
import { FirebaseContext } from '../context/firebase/firebaseContext';
import Loader from './Loader';
import TodosHelper from './TodosHelper';

const Todos = () => {

  const {firebaseState, fetchTodos} = React.useContext(FirebaseContext);

  React.useEffect(()=> {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

//   if(!firebaseState.todos.length) {
//     return <div>Вы не созади пока что не одной заметки</div>
// }

  return (
        !firebaseState.loading
        ?
        <TodosHelper todos={firebaseState.todos}/>
        :
        <Loader/>
  )
}

export default Todos