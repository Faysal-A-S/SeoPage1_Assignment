import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://seo-page1-assignment.vercel.app/api",
    headers: {},
  }),
  tagTypes: ["User", "Status"],
  endpoints: (builder) => ({}),
});
