import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["product", "brand", "model"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => "/product",
            providesTags: ["product"],
        }),
        addProduct: builder.mutation({
            query: (payload) => ({
                url: "/product",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["product"],
        }),
        upDateProduct: builder.mutation({
            query: (payload) => ({
                url: `/product/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["product"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["product"],
        }),
        getBrands: builder.query({
            query: () => "/brand",
            providesTags: ["brand"],
        }),
        addBrand: builder.mutation({
            query: (payload) => ({
                url: "/brand",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["brand"]
        }),
        upDateBrand: builder.mutation({
            query: (payload) => ({
                url: `brand/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["brand"]
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brand/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["brand"]
        }),
        getModels: builder.query({
            query: () => "/model",
            providesTags: ["model"],
        }),
        addModels: builder.mutation({
            query: (payload) => ({
                url: `/model`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["model"]
        }),
        upDateModels: builder.mutation({
            query: (payload) => ({
                url: `/model/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["model"]
        }),
        deleteModels: builder.mutation({
            query: (id) => ({
                url: `/model/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["model"]
        })
    }),
})
export const { useGetProductQuery, useAddProductMutation, useDeleteProductMutation, useUpDateProductMutation, useGetBrandsQuery, useAddBrandMutation, useDeleteBrandMutation, useUpDateBrandMutation, useGetModelsQuery, useAddModelsMutation, useUpDateModelsMutation, useDeleteModelsMutation } = api
export default api