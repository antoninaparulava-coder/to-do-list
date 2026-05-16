import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [{id: 1, name: "Do the dishes", category:"cleaning", done: false}],
    category: "cleaning",
  },
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {

      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if(index !== -1) {
        state.todos[index] = action.payload;
        state.todos.sort((a, b) => a.id - b.id)
      }
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload]
    },
    changeCategory: (state, action) => {
      state.category = action.payload;

    }
  }
})

export const { addTodo, updateTodo, deleteTodo, changeCategory } = todosSlice.actions

export default todosSlice.reducer