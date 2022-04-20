import React from 'react'
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {

  const [val, setVal] = React.useState<string>('');
  const context = React.useContext(AlertContext);
  const {addTodo} = React.useContext(FirebaseContext);

  if(context === undefined) {
    throw new Error('context');
  }

  const submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if(val.trim()) {
      addTodo(val.trim())
        .then(() => context.show('Заметка была создана', 'success'))
        .catch(() => context.show('Fatal Error 505', 'danger'))
      
    } else {
      context.show('Заметка не может быть пустой', 'warning');
    }

    setVal('');
  }


  return (
    <form className='mt-4 mb-5' onSubmit={(ev) => submit(ev)}>
        <div className='form-group'>
            <input value={val} onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setVal(ev.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder='Write a todo'/>
            <input type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder='Write additional for todo'/>
        </div>
        <select className="form-select mt-2" defaultValue={'Take a time for your book'}>
            {/* <option selected>Take a time for your book</option> */}
            <option value="10">10 min.</option>
            <option value="20">20 min.</option>
            <option value="30">30 min.</option>
        </select>
        <select className="form-select mt-2" defaultValue={'Take a potency for your book'}>
            {/* <option selected>Take a potency for your book</option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <div className="btn-group d-flex">
          <button type="submit" className="btn btn-outline-primary mt-2">Create</button>
        </div>
    </form>
  )
}

export default Form