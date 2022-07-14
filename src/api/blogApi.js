import axiosClient from './axiosClient';

const blogApi = {
    newPost(data) {
        const url = '/blogs/new-post';
        return axiosClient.post(url, data);
    },
};

export default blogApi;
