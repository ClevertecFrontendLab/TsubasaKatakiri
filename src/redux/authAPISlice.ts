import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChangePassword } from "src/interfaces/ChangePassword";
import { CheckEmail } from "src/interfaces/CheckEmail";
import { ConfirmEmail } from "src/interfaces/ConfirmEmail";
import { ServerResponseLogin } from "src/interfaces/ServerResponseLogin";
import { User } from "src/interfaces/User";


export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/auth',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            const sessionToken = sessionStorage.getItem('accessToken');
            if(accessToken || sessionToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<{statusCode: number}, Partial<User>>({
            query: (userData) => ({
                url: '/registration',
                method: 'POST',
                body: userData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        }),

        loginUser: builder.mutation<{statusCode: number, accessToken: string}, Partial<User>>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            }),
            transformResponse: (response: ServerResponseLogin) => ({
                statusCode: 201,
                accessToken: response.accessToken,
            })
        }),

        checkEmail: builder.mutation<{statusCode: number}, Partial<CheckEmail>>({
            query: (emailData) => ({
                url: '/check-email',
                method: 'POST',
                body: emailData
            }),
            transformResponse: () => ({
                statusCode: 200
            })
        }),

        confirmEmail: builder.mutation<{statusCode: number}, Partial<ConfirmEmail>>({
            query: (emailData) => ({
                url: '/confirm-email',
                method: 'POST',
                body: emailData
            }),
            transformResponse: () => ({
                statusCode: 200
            })
        }),

        changePassword: builder.mutation<{statusCode: number}, Partial<ChangePassword>>({
            query: (passwordData) => ({
                url: '/change-password',
                method: 'POST',
                body: passwordData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        }),
    })
})

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useCheckEmailMutation, 
    useConfirmEmailMutation, 
    useChangePasswordMutation 
} = authAPI;