import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api",
    headers: {},
  }),
  tagTypes: ["User", "Status"],
  endpoints: (builder) => ({}),
});
