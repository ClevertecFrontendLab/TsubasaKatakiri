import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TrainingType } from "src/interfaces/Training";


export const catalogsAPI = createApi({
    reducerPath: 'catalogsAPI',
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
        getTrainingsList: builder.query<Array<TrainingType>, void>({
            query: () => ({
                url: '/catalogs/training-list',
                method: 'GET'
            }),
        }),
    })
})


export const { 
    useLazyGetTrainingsListQuery, 
} = catalogsAPI;