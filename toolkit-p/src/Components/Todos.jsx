import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import { removeTodo } from '../assets/features/todoSlice';

function Todos() {
    const todosArr=useSelector(state=>state.todos);
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(todosArr);
    })
  return (
    <div>
     {
       todosArr?.map((todo)=>(
        <div key={todo.id}>
          {todo.text}
          <button className='bg-red-500 text-white'>Delete</button>
        </div>
       ))
     }
    </div>
  );
}

export default Todos;
 