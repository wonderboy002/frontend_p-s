import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { addTodo } from '../assets/features/todoSlice';
function Addtodo() {

    const [task,settask]=useState("");
    //useDispatch uses reducers to make changes to the store
    const dispatch=useDispatch();
    const addtodohandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        settask("");
    }
  return (
    <div className='my-10'>
      <form className='bg-darkBlue w-full flex items-center justify-center p-3 gap-4'>
        <input type="text" className='p-4 w-full' placeholder='Enter Your Task' name='task' value={task} onChange={(e)=>settask(e.target.value)}/>
        <button className='p-3 bg-purple text-white font-bold' onClick={addtodohandler}>Add</button>
      </form>
    </div>
  );
}

export default Addtodo;
