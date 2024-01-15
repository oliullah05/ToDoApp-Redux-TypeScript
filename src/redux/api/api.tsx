import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["todo"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams()
        console.log({ params });
        if (priority) {
          params.append("priority", priority)
          console.log({ params2: params });
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params
        }
      },
      providesTags: ["todo"]
    }),
    addTodos: builder.mutation({
      query: (data) => {

        return {
          url: "/tasks",
          method: "POST",
          body: data
        }
      },
      invalidatesTags: ["todo"]
    }),
    toggleTodos: builder.mutation({
      query: (data) => {
        console.log(data, "back");
        return {
          url: `/tasks/${data.id}`,
          method: "PUT",
          body: data.data,
        }
      },
      invalidatesTags: ["todo"]
    }),

    deleteTodos: builder.mutation({
      query: (data) => {
        return {
          url: `/tasks/${data}`,
          method: "DELETE"
        }
      },
      invalidatesTags: ["todo"]
    }),
    updateTodos: builder.mutation({
      query: (data) => {
        console.log(data.id,55,data);
        return {
          url: `/tasks/${data.id}`,
          method: "PUT",
          body: data.data,
        }
      },
      invalidatesTags: ["todo"]
    }),

  }),
});

export const { useGetTodosQuery,
  useUpdateTodosMutation,
  useAddTodosMutation,
  useToggleTodosMutation,
  useDeleteTodosMutation

} = baseApi

