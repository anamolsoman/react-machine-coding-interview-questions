import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      state.push(newTodo);
    },
    ToggleTodo: (state, action) => {},
    DeleteTodo: (state, action) => {},
  },
});

export const { addTask, ToggleTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
