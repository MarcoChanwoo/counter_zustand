import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
        },
      ],
    })),
}));
