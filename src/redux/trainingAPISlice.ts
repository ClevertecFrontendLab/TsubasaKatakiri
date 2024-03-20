import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Training, TrainingPutQuery } from "../types/training";


export const trainingAPI = createApi({
    reducerPath: 'trainingAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
            if(accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTrainings: builder.query<Array<Training>, void>({
            query: () => ({
                url: '/training',
                method: 'GET'
            }),
        }),

        createTraining: builder.mutation<Training, Partial<Training>>({
            query: (body) => ({
                url: '/training',
                method: 'POST',
                body
            }),
        }),

        editTraining: builder.mutation<Training, Partial<Training>>({
            query(body) {
              return {
                url: `training/${body._id}`,
                method: 'PUT',
                body: body
              }
            },
          }),

        deleteTraining: builder.mutation<{statusCode: number}, number>({
            query: (id) => ({
                url: `/training/${id}`,
                method: 'DELETE'
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        })
    })
})


export const { 
    useLazyGetTrainingsQuery, 
    useCreateTrainingMutation,
    useEditTrainingMutation,
    useDeleteTrainingMutation,
} = trainingAPI;