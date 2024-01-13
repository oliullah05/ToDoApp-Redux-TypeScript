import { PayloadAction, createSlice } from "@reduxjs/toolkit";



type TTodo = {
    id: string,
    tittle: string,
    description: string,
    isCompleted?: boolean
}
type TInitialState = {
    todos: TTodo[]
}
const initialState: TInitialState = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(todo => todo.id === action.payload);
            task!.isCompleted = !task?.isCompleted
        }
    }
})


export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions

// console.log(todoSlice, 99);
export default todoSlice.reducer