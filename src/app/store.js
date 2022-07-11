import { configureStore } from '@reduxjs/toolkit';
import authReducer from '~/slices/authSlice';
import notificationReducer from '~/slices/notificationSlice';
import writeBlogReducer from '~/slices/writeBlogSlice';

export const store = configureStore({
    reducer: {
        writeBlog: writeBlogReducer,
        auth: authReducer,
        notification: notificationReducer,
    },
});
