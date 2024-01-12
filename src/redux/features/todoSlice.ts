import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{

    }
})

console.log(todoSlice,99);
export default todoSlice.reducer