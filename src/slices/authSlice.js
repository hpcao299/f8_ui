import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '~/api/userApi';

const initialState = { currentUser: null };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        logout(state, action) {
            state.currentUser = null;
        },
    },
    extraReducers: build => {
        build.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        build.addCase(getCurrentUser.rejected, (state, action) => {
            state.currentUser = null;
        });
    },
});

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (i, { rejectWithValue }) => {
        try {
            const { data } = await userApi.getCurrentUser();
            return data;
        } catch (error) {
            console.error(error);
            rejectWithValue(error);
        }
    },
);

export const { setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
