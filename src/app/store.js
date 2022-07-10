import { configureStore } from '@reduxjs/toolkit';
import authReducer from '~/slices/authSlice';
import writeBlogReducer from '~/slices/writeBlogSlice';

export const store = configureStore({
    reducer: {
        writeBlog: writeBlogReducer,
        auth: authReducer,
    },
});
