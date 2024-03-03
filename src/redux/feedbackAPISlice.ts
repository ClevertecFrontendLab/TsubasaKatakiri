import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, PostData } from "src/interfaces/Post";


export const feedbackAPI = createApi({
    reducerPath: 'feedbackAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            const sessionToken = sessionStorage.getItem('accessToken');
            if(accessToken || sessionToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getFeedback: builder.query<Array<PostData>, void>({
            query: () => ({
                url: '/feedback',
                method: 'GET'
            }),
        }),

        postFeedback: builder.mutation<{statusCode: number}, Partial<Post>>({
            query: (postData) => ({
                url: '/feedback',
                method: 'POST',
                body: postData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        })
    })
})


export const { 
    useGetFeedbackQuery, 
    usePostFeedbackMutation 
} = feedbackAPI;