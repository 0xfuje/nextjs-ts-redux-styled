import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Post } from '../../types/api';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => `/posts`
        }),
        getPost: builder.query<Post, number>({
            query: () => `/posts/1`
        })
    })
});

export default apiSlice;

export const {
    useGetPostsQuery,
    useGetPostQuery
} = apiSlice;