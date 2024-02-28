import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "src/interfaces/User"

type InitialState = {
    userData: User;
}

const initialState: InitialState = {
    userData: {email: '', password: ''},
}

const userData = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
        },
    },
})

export default userData.reducer;
export const {saveUserData} = userData.actions;