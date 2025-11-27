import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api", // key trong store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<{ id: number; title: string }[], void>({
      query: () => "todos",
    }),
    getTodo: builder.query<{ id: number; title: string }, number>({
      query: (id) => `todos/${id}`,
    }),
    addTodo: builder.mutation<{ id: number; title: string }, { title: string }>(
      {
        query: (body) => ({
          url: "todos",
          method: "POST",
          body,
        }),
      }
    ),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery, useAddTodoMutation } = api;
