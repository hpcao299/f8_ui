import axiosClient from './axiosClient';

const blogApi = {
    newPost(data) {
        const url = '/blogs/new-post';
        return axiosClient.post(url, data);
    },
    getNewPosts() {
        const url = '/blogs';
        return axiosClient.get(url);
    },
    getPostsTopics(topic_id) {
        const url = `/blogs/topic/${topic_id}`;
        return axiosClient.get(url);
    },
    getDraftsPosts() {
        const url = '/blogs/my-posts/drafts';
        return axiosClient.get(url);
    },
    getPublishedPosts() {
        const url = '/blogs/my-posts/published';
        return axiosClient.get(url);
    },
    deletePost(id) {
        const url = `/blogs/${id}`;
        return axiosClient.delete(url);
    },
};

export default blogApi;
