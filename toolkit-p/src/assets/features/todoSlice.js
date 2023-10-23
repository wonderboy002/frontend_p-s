import { createSlice,nanoid } from "@reduxjs/toolkit";

// Define your initial state
const initialState = {
  todos: [{
   
  }],
};

// Create a slice
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Generate a unique ID for the new to-do
      const newId = nanoid();
      const newTodo = {
        id: newId,
        text: action.payload,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      // Remove the to-do with the matching ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
