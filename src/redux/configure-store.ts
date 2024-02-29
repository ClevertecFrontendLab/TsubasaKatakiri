import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { authAPI } from './authAPISlice.ts'
import { feedbackAPI } from './feedbackAPISlice.ts'
import authUtilsReducer from './authUtilSlice.ts';
import userDataReducer from './userSlice.ts';

const {
        createReduxHistory,
        routerMiddleware,
        routerReducer
    } = createReduxHistoryContext({history: createBrowserHistory()})

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        [authAPI.reducerPath]: authAPI.reducer,
        authUtils: authUtilsReducer,
        userData: userDataReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware).concat(authAPI.middleware)
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
