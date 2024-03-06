import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChangePassword } from "src/interfaces/ChangePassword";

type InitialState = {
    userEmail: string;
    isLoading: boolean;
    newPassword: string;
    newPasswordConfirm: string;
}

const initialState: InitialState = {
    userEmail: '',
    isLoading: false,
    newPassword: '',
    newPasswordConfirm: ''
}

const authUtils = createSlice({
    name: 'authUtils',
    initialState,
    reducers: {
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.userEmail = action.payload;
        },
        setLoadingState: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setNewPassword: (state, action: PayloadAction<ChangePassword>) => {
            state.newPassword = action.payload.password;
            state.newPasswordConfirm = action.payload.confirmPassword;
        },
    },
})

export default authUtils.reducer;
export const {setUserEmail, setLoadingState, setNewPassword} = authUtils.actions;