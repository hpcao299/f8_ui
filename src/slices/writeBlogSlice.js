import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogApi from '~/api/blogApi';
import { checkDataExists } from '~/utils';

const initialState = {
    title: '',
    content: '',
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
        setContent(state, action) {
            state.content = action.payload;
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
        runApi(state) {
            state.status = 'loading';
        },
        endApi(state) {
            state.status = 'idle';
            state.isShownPublishPreview = false;
        },
        resetAll(state) {
            return {
                title: '',
                content: '',
                meta_title: '',
                meta_description: '',
                topic_id: 2,
                isShownPublishPreview: false,
                status: 'idle',
            };
        },
        showPublishPreview(state) {
            state.isShownPublishPreview = true;
        },
        hidePublishPreview(state) {
            state.isShownPublishPreview = false;
            state.topic_id = 2;
        },
        writingBlog(state) {
            state.status = 'writing';
        },
    },
    extraReducers: build => {
        build
            .addCase(fetchPostForEdit.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchPostForEdit.fulfilled, (state, action) => {
                state.title = checkDataExists(action?.payload?.title);
                state.content = checkDataExists(action?.payload?.content);
                state.meta_title = checkDataExists(action?.payload?.meta_title);
                state.meta_description = checkDataExists(action?.payload?.meta_description);
                state.status = 'idle';
            })
            .addCase(fetchPostForEdit.rejected, state => {
                state.status = 'failed';
            })
            .addCase(editPost.fulfilled, state => {
                state.status = 'idle';
            });
    },
});

export const fetchPostForEdit = createAsyncThunk(
    'writeBlog/fetchPostForEdit',
    async (blogId, { rejectWithValue }) => {
        try {
            const { data } = await blogApi.getPostForEdit(blogId);
            return data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    },
);

export const newPost = createAsyncThunk(
    'writeBlog/newPost',
    async ({ data: dataProp, handleSuccess }) => {
        try {
            const { data } = await blogApi.newPost(dataProp);
            handleSuccess(data.blog_id);
        } catch (error) {
            console.error(error);
        }
    },
);

export const editPost = createAsyncThunk('writeBlog/editPost', async ({ blogId, data }) => {
    try {
        await blogApi.editPost(blogId, data);
    } catch (error) {
        console.error(error);
    }
});

export const selectPostTopic = createAsyncThunk(
    'writeBlog/selectPostTopic',
    async ({ blogId, data }) => {
        try {
            await blogApi.selectPostTopic(blogId, data);
        } catch (error) {
            console.error(error);
        }
    },
);

export const {
    setTitle,
    setContent,
    showPublishPreview,
    hidePublishPreview,
    setMetaTitle,
    setMetaDesc,
    setTopicId,
    resetAll,
    runApi,
    endApi,
    writingBlog,
} = writeBlogSlice.actions;
export default writeBlogSlice.reducer;
