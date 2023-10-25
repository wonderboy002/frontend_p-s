import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    add: (state, action) => {
      const newId = nanoid();
      const newTask = {
        id: newId,
        text: action.payload,
      };
      state.todos.push(newTask);
    },
    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action) => {
      const newTask = {
        id: action.payload.editId,
        text: action.payload.text,
      };
      state.todos[action.payload.i] = newTask;
    },
  },
});

export const { add, remove, update } = todoSlice.actions;
export default todoSlice.reducer;
