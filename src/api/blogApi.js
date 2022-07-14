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
};

export default blogApi;
