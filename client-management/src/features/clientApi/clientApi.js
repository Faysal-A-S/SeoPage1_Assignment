import { Api } from "../api/api";

export const clientApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    getClientsByStatus: builder.query({
      query: () => ({
        url: `/users/data`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateClient: builder.mutation({
      query: ({ formData, userId }) => ({
        url: `/users/update/${userId}`,
        method: "POST",
        body: formData,

        headers: {},
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const { useGetClientsByStatusQuery, useUpdateClientMutation } =
  clientApi;
