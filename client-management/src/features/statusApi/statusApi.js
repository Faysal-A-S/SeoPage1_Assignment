import { Api } from "../api/api";
export const statusApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    getStatus: builder.query({
      query: () => ({
        url: `/status/data`,
        method: "GET",
      }),
      providesTags: ["Status"],
    }),
  }),
});
export const { useGetStatusQuery } = statusApi;
