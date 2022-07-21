import axiosClient from './axiosClient';

const blogApi = {
    // Write blog apis
    newPost(data) {
        const url = '/blogs/new-post';
        return axiosClient.post(url, data);
    },
    getPostForEdit(id) {
        const url = `/blogs/${id}/show-for-edit`;
        return axiosClient.get(url);
    },
    editPost(id, data) {
        const url = `/blogs/${id}/edit`;
        return axiosClient.put(url, data);
    },
    selectPostTopic(id, data) {
        const url = `/blogs/${id}/topic`;
        return axiosClient.patch(url, data);
    },
    publishPost({ id, ...data }) {
        const url = `/blogs/${id}/publish`;
        return axiosClient.patch(url, data);
    },
    deletePost(id) {
        const url = `/blogs/${id}`;
        return axiosClient.delete(url);
    },

    // View blog apis
    getNewPosts() {
        const url = '/blogs';
        return axiosClient.get(url);
    },
    getPostsTopics(topic_id) {
        const url = `/blogs/topic/${topic_id}`;
        return axiosClient.get(url);
    },
    getPostDetails(id) {
        const url = `/blogs/details/${id}`;
        return axiosClient.get(url);
    },
    getSameAuthorPosts(blog_id) {
        const url = `/blogs/${blog_id}/same-author`;
        return axiosClient.get(url);
    },
    getRelatedPosts(blog_id) {
        const url = `/blogs/${blog_id}/related-posts`;
        return axiosClient.get(url);
    },

    // Reactions apis
    patchReactions(blog_id, data) {
        const url = `/blogs/${blog_id}/reactions`;
        return axiosClient.patch(url, data);
    },

    // My posts apis
    getDraftsPosts() {
        const url = '/blogs/my-posts/drafts';
        return axiosClient.get(url);
    },
    getPublishedPosts() {
        const url = '/blogs/my-posts/published';
        return axiosClient.get(url);
    },
};

export default blogApi;
