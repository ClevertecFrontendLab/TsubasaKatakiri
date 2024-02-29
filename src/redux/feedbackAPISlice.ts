import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Post } from "src/interfaces/Post";

export const feedbackAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/feedback',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            if(accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getFeedback: builder.query<{statusCode: number, posts: Post[]}, void>({
            query: () => ({
                url: '/',
                method: 'GET'
            }),
            transformResponse: (response: {posts: Post[]}) => ({
                statusCode: 201,
                posts: response.posts
            })
        }),
        postFeedback: builder.mutation<{statusCode: number}, Partial<Post>>({
            query: (postData) => ({
                url: '/',
                method: 'POST',
                body: postData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        })
    })
})

// export const { useRegisterUserMutation, useLoginUserMutation } = authAPI;
export const { useGetFeedbackQuery } = feedbackAPI;
export const { usePostFeedbackMutation } = feedbackAPI;