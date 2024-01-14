import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes:["todo"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => {
        
        return {
        url:"/tasks",
        method:"GET"
      }},
      providesTags:["todo"]
    }),
    addTodos: builder.mutation({
      query: (data) => {
        console.log("inside",data);
        return {
        url:"/tasks",
        method:"POST",
        body:data
      }},
      invalidatesTags:["todo"]
    }),

  }),
});

export const {useGetTodosQuery,useAddTodosMutation}=baseApi

