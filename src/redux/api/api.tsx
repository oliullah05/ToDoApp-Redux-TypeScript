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
  }),
});

export const {useGetTodosQuery}=baseApi

