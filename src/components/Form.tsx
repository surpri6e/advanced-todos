import React from 'react'

const Form = () => {
  return (
    <form className='mt-4'>
        <div className='form-group'>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Write a todo'/>
            <input type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder='Write additional for todo'/>
        </div>
        <select className="form-select mt-2">
            <option selected>Take a time for your todo</option>
            <option value="10">10 min.</option>
            <option value="20">20 min.</option>
            <option value="30">30 min.</option>
        </select>
    </form>
  )
}

export default Form