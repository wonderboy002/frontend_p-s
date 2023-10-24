import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define your initial state
const initialState = {
  todos: [],
};

// Create a slice
//todoSlice needs to be aware of the initial state of the store
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Generate a unique ID for the new to-do
      const newId = nanoid();
      const newTodo = {
        id: newId,
        text: action.payload,
      }; //yeh kaam action-creators ka hai
      state.todos.push(newTodo); //yeh kaam reducer ka hai
    },
    removeTodo: (state, action) => {
      // Remove the to-do with the matching ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions and reducer
//todoSlice.actions contains action creators
//todoSlice.reducer contains list of all reducers. basically it is function that contains the definition of all action creators
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
