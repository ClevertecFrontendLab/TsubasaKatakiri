import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Training, TrainingPutQuery } from "src/interfaces/Training";


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

        createTraining: builder.mutation<{statusCode: number}, Partial<Training>>({
            query: (body) => ({
                url: '/training',
                method: 'POST',
                body
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        }),

        editTraining: builder.mutation<Training, Partial<TrainingPutQuery>>({
            query(data) {
              const { id, ...body } = data
              return {
                url: `training/${id}`,
                method: 'PUT',
                body,
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