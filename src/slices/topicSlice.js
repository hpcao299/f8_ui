import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import topicApi from '~/api/topicApi';

const initialState = { topics: [], status: 'idle' };

const topicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {},
    extraReducers: build => {
        build
            .addCase(fetchTopics.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTopics.fulfilled, (state, action) => {
                state.topics = action.payload;
            });
    },
});

export const fetchTopics = createAsyncThunk('topic/fetchTopics', async (state, action) => {
    try {
        const { data } = await topicApi.getTopics();
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const { setSelectedTopic } = topicSlice.actions;

export default topicSlice.reducer;