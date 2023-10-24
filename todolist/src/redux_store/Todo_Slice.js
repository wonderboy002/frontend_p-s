import {createSlice,nanoid} from "@reduxjs/toolkit";
const initialState={
    todos : []
}

export const todoSlice=createSlice({
    name : 'todolist',
    initialState,
    reducers : {
        add : (state,action)=>{
            const newId=nanoid();
            const newTask={
                id : newId,
                text : action.payload
            };
            state.todos.push(newTask);
        },
        remove : (state,action)=>{
             state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
    },
})

export const {add,remove} = todoSlice.actions;
export default todoSlice.reducer; 