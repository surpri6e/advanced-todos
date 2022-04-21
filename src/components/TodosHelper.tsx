import React from 'react'
import { ITodo } from '../types/ITodo'

interface TodosHelperProps {
    todos: ITodo[];
    remove: (key: string, id: number) => Promise<void>;
}

const TodosHelper: React.FC<TodosHelperProps> = ({todos, remove}) => {

  return (
    <ol className="list-group list-group-numbered mb-5">
        {
        todos.map(todo => (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={todo.id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{todo.title} <span className='fw-light fs-10 font-monospace'> - {todo.time ? `${todo.time} min.` : 'Always'}</span></div>
            {todo.additional}
          </div>
          <div className='d-flex flex-column'>
            <div className='d-flex justify-content-end mb-2'>
              <span className="badge bg-primary rounded-pill">{todo.potency}</span>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => remove(todo.key ? todo.key : '', todo.id)}>&times;</button>
          </div>
        </li>
        ))
        }
        </ol>
  )
}

export default TodosHelper