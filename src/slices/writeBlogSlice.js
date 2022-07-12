import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    value: '',
    meta_title: '',
    meta_description: '',
    isShownPublishPreview: false,
};

const writeBlogSlice = createSlice({
    name: 'writeBlog',
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
            state.meta_title = action.payload;
        },
        setValue(state, action) {
            state.value = action.payload;
        },
        setMetaTitle(state, action) {
            state.meta_title = action.payload;
        },
        setMetaDesc(state, action) {
            state.meta_description = action.payload;
        },
        showPublishPreview(state) {
            state.isShownPublishPreview = true;
        },
        hidePublishPreview(state) {
            state.isShownPublishPreview = false;
        },
    },
});

export const {
    setTitle,
    setValue,
    showPublishPreview,
    hidePublishPreview,
    setMetaTitle,
    setMetaDesc,
} = writeBlogSlice.actions;
export default writeBlogSlice.reducer;
