import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    value: '',
};

const writeBlogSlice = createSlice({
    name: 'writeBlog',
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setTitle, setValue } = writeBlogSlice.actions;
export default writeBlogSlice.reducer;
