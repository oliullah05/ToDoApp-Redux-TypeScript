import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://taskmaster-server.vercel.app/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url:"/tasks",
        method:"GET"
      })
    }),
  }),
});

export const {useGetTodosQuery}=baseApi

