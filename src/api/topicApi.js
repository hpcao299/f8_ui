import axiosClient from './axiosClient';

const topicApi = {
    getTopics() {
        const url = '/topics';
        return axiosClient.get(url);
    },
};

export default topicApi;
