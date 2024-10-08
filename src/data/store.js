import { create } from "zustand";
import { todos } from "./data.js";
import { getToday } from "../utils/date.js";

const useStore = create((set) => ({
    todos: todos, 

    todayName: getToday(),
    
    toggleTodo: (id) =>
        set((state) => {
            console.log("store, toggleTodo", JSON.stringify(state.todos));
            const x = {
                todos: state.todos.map((t) => t.id === id ? { ...t, done: !t.done } : t
                ),
            };
            console.log("Store2", JSON.stringify(x));
            return x;
        }),

    resetTodos: () => set((state) => ({ todos: [] })),

    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((t) => t.id !== id),
        })),

    updateTodo: (id, newText) =>
        set((state) => ({
            todos: state.todos.map((t) =>
                t.id === id ? { ...t, text: newText } : t
            ),
        })),

    setTodos: (newTodos) => set({ todos: newTodos }),

    snoozeTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((t) =>
                t.id === id ? { ...t, day: getNextDay(t.day) } : t
            ),
        })),

}));

export { useStore };
