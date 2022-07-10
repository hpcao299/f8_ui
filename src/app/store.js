import { configureStore } from '@reduxjs/toolkit';
import writeBlogReducer from '~/slices/writeBlogSlice';

export const store = configureStore({
    reducer: {
        writeBlog: writeBlogReducer,
    },
});
