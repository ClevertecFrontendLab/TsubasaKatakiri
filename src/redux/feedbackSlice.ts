import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostData } from "src/interfaces/Post";

type InitialState = {
    feedbacks: PostData[];
    isExpanded: boolean;
}

const initialState: InitialState = {
    feedbacks: [],
    isExpanded: false,
}

const feedbackData = createSlice({
    name: 'feedbackData',
    initialState,
    reducers: {
        setFeedbackData: (state, action: PayloadAction<PostData[]>) => {
            state.feedbacks = action.payload;
        },
        setIsExpanded: (state, action: PayloadAction<boolean>) => {
            state.isExpanded = action.payload;
        },
    },
})

export default feedbackData.reducer;
export const {setFeedbackData, setIsExpanded} = feedbackData.actions;