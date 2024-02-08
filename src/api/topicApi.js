import useSWRImmutable from 'swr/immutable';

const topicApi = {
    useTopics() {
        const url = '/topics';
        return useSWRImmutable(url);
    },
};

export default topicApi;
