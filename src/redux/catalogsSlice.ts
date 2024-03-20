import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TrainingType } from "../interfaces/TrainingType";

type InitialState = {
    trainingCatalog: TrainingType[];
}

const initialState: InitialState = {
    trainingCatalog: [],
}

const catalogData = createSlice({
    name: 'catalogData',
    initialState,
    reducers: {
        updateTrainingCatalog: (state, action: PayloadAction<TrainingType[]>) => {
            state.trainingCatalog = action.payload;
        },
    },
})

export default catalogData.reducer;
export const {updateTrainingCatalog} = catalogData.actions;