import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface product{
    id: number;
    name: string;
    price: number;
    available_qty: number;

}
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    tagTypes: ['Category','Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<any,void>({
            query: () => '/getproducts',
            // transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Products'] 
        }),
        getsProducts: builder.query<any,number>({
            query: (id) => `/singleproduct/${id}`,
            // transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Products'] 
        }),
        getAll: builder.query<any,void>({
            query: () => `/getall`,
            // transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Products'] 
        }),
        getCategory: builder.query<product[],void>({
            query: () => '/getcategory',
            // transformResponse: (res:{data:product[]}) => res.sort((a, b) => b.id - a.id),
            providesTags: ['Category']
        }),
        getSubcategory: builder.query<product[],void>({
            query: () => '/getsubcategory',
            // transformResponse: (res:{data:product[]}) => res.sort((a, b) => b.id - a.id),
            providesTags: ['Category']
        }),
        addCategory: builder.mutation({
            query: (category) => ({
                url: '/addcategory',
                method: 'POST',
                body:category
            }),
            invalidatesTags: ['Category']
        }),
        addSubcategory: builder.mutation({
            query: (Scategory) => ({
                url: '/addsubcat',
                method: 'POST',
                body:Scategory
            }),
            invalidatesTags: ['Category']
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/addproduct',
                method: 'POST',
                body:product
            }),
            invalidatesTags: ['Products']
        }),
        deleteProducts: builder.mutation({
            query: ({ id }) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Products']
        }),
        deleteCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/catdelete/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Category']
        }),
        deleteSubCategory: builder.mutation({
            query: ({ id }) => ({
                url: `/scatdelete/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Category']
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `/updateproduct/${id}`,
                method: 'PUT',
                body: patch,
            }),
            invalidatesTags: ['Products']
        }),
           
        
    })

})
export const {
    useGetProductsQuery,
    useGetAllQuery,
    useAddCategoryMutation,
    useGetCategoryQuery,
    useGetSubcategoryQuery,
    useAddProductMutation,
    useAddSubcategoryMutation,
    useDeleteProductsMutation,
    useUpdateProductMutation,
    useDeleteCategoryMutation,
    useDeleteSubCategoryMutation
    
} = apiSlice
