import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    value: '',
    meta_title: '',
    meta_description: '',
    topic_id: 2,
    isShownPublishPreview: false,
    status: 'idle',
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
        setTopicId(state, action) {
            state.topic_id = action.payload;
        },
        runApi(state, action) {
            state.status = 'loading';
        },
        endApi(state, action) {
            state.status = 'idle';
            state.isShownPublishPreview = false;
        },
        showPublishPreview(state) {
            state.isShownPublishPreview = true;
        },
        hidePublishPreview(state) {
            state.isShownPublishPreview = false;
            state.topic_id = 2;
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
    setTopicId,
    runApi,
    endApi,
} = writeBlogSlice.actions;
export default writeBlogSlice.reducer;
