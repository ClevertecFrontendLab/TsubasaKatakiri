import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TrainingTypeData } from "../types/training";

type InitialState = {
    training: TrainingTypeData | null;
}

const initialState: InitialState = {
    training: null,
}

const trainingCreateData = createSlice({
    name: 'trainingCreateData',
    initialState,
    reducers: {
        setTrainingCreateData: (state, action: PayloadAction<TrainingTypeData | null>) => {
            state.training = action.payload;
        },
    },
})

export default trainingCreateData.reducer;
export const {
    setTrainingCreateData, 
} = trainingCreateData.actions;