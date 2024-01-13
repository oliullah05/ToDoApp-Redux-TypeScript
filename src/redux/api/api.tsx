import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath:"baseAPi",
    baseQuery:fetchBaseQuery({baseUrl:"https://level2a2.vercel.app/api/users"}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Pokemon, string>({
          query: (name) => `pokemon/${name}`,
        }),
      }),
})