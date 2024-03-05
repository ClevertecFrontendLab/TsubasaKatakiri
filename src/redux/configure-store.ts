import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { authAPI } from './authAPISlice.ts'
import { feedbackAPI } from './feedbackAPISlice.ts'
import authUtilsReducer from './authUtilSlice.ts';
import userDataReducer from './userSlice.ts';
import feedbackDataReducer from './feedbackSlice.ts';
import appUtilsReducer from './appUtilSlice.ts';

const {
        createReduxHistory,
        routerMiddleware,
        routerReducer
    } = createReduxHistoryContext({history: createBrowserHistory()})

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        [authAPI.reducerPath]: authAPI.reducer,
        [feedbackAPI.reducerPath]: feedbackAPI.reducer,
        authUtils: authUtilsReducer,
        userData: userDataReducer,
        feedbackData: feedbackDataReducer,
        appUtils: appUtilsReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware).concat(authAPI.middleware).concat(feedbackAPI.middleware)
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
