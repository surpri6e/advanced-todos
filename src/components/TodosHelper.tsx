import React from 'react'
import { ITodo } from '../types/ITodo'

interface TodosHelperProps {
    todos: ITodo[]
}

const TodosHelper: React.FC<TodosHelperProps> = ({todos}) => {

  return (
    <ol className="list-group list-group-numbered mb-5">
        {
        todos.map(todo => (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={todo.id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.title} <span className='fw-light fs-10 font-monospace'> - {todo.time} min.</span></div>
            {todo.additional}
          </div>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-end mb-2'>
              <span className="badge bg-primary rounded-pill">{todo.potency}</span>
            </div>
            <button type="button" className="btn btn-danger">&times;</button>
          </div>
        </li>
        ))
        }
        </ol>
  )
}

export default TodosHelper