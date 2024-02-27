import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChangePassword } from "src/interfaces/ChangePassword";
import { CheckEmail } from "src/interfaces/CheckEmail";
import { ConfirmEmail } from "src/interfaces/ConfirmEmail";
import { ServerResponseLogin } from "src/interfaces/ServerResponseLogin";
import { User } from "src/interfaces/User";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://marathon-api.clevertec.ru/',
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            if(accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation<{statusCode: number}, Partial<User>>({
            query: (userData) => ({
                url: 'auth/registration',
                method: 'POST',
                body: userData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        }),
        loginUser: builder.mutation<{statusCode: number, accessToken: string}, Partial<User>>({
            query: (userData) => ({
                url: 'auth/login',
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
                url: 'auth/check-email',
                method: 'POST',
                body: emailData
            }),
            transformResponse: () => ({
                statusCode: 200
            })
        }),
        confirmEmail: builder.mutation<{statusCode: number}, Partial<ConfirmEmail>>({
            query: (emailData) => ({
                url: 'auth/confirm-email',
                method: 'POST',
                body: emailData
            }),
            transformResponse: () => ({
                statusCode: 200
            })
        }),
        changePassword: builder.mutation<{statusCode: number}, Partial<ChangePassword>>({
            query: (passwordData) => ({
                url: 'auth/change-password',
                method: 'POST',
                body: passwordData
            }),
            transformResponse: () => ({
                statusCode: 201
            })
        })
    })
})

// export const { useRegisterUserMutation, useLoginUserMutation } = authAPI;
export const { useRegisterUserMutation } = authAPI;
export const { useLoginUserMutation } = authAPI;
export const { useCheckEmailMutation } = authAPI;
export const { useConfirmEmailMutation } = authAPI;
export const { useChangePasswordMutation } = authAPI;