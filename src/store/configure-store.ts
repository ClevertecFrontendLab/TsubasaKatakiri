import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '~/query/create-api';

import appReducer, { appSlice } from './app-slice';
import searchReducer, { searchSlice, SearchState } from './search-slice';

interface RootState {
    [appSlice.name]: ReturnType<typeof appReducer>;
    [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
    [searchSlice.name]: SearchState;
}

const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [searchSlice.name]: searchReducer,
});

export type ApplicationState = RootState;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
