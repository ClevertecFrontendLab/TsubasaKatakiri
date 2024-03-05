import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isLoading: boolean;
}

const initialState: InitialState = {
    isLoading: false,
}

const appUtils = createSlice({
    name: 'authUtils',
    initialState,
    reducers: {
        setLoadingApp: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
})

export default appUtils.reducer;
export const {setLoadingApp} = appUtils.actions;