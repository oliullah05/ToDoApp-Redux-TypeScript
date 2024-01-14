import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        
        return {
        url:"/tasks",
        method:"GET"
      }}
    }),
    addTodos: builder.mutation({
      query: (data) => {
        return {
        url:"/tasks",
        method:"POST",
        body:data
      }}
    }),
  }),
});

export const {useGetTodosQuery,useAddTodosMutation}=baseApi

