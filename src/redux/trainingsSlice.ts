import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Training } from "../types/training";

type InitialState = {
    trainingsAll: Training[],
    isLoaded: boolean,
}

const initialState: InitialState = {
    trainingsAll: [],
    isLoaded: false,
}

const trainingData = createSlice({
    name: 'trainingData',
    initialState,
    reducers: {
        setTrainingData: (state, action: PayloadAction<Training[]>) => {
            state.trainingsAll = action.payload;
        },
        setIsLoaded: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        },
    },
})

export default trainingData.reducer;
export const {
    setTrainingData, 
    setIsLoaded,
} = trainingData.actions;