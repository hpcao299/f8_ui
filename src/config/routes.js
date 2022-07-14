const routes = {
    home: '/',
    learningPaths: '/learning-paths',
    courses: '/courses',

    blog: '/blog',
    blogTopics: '/blog/:topicId/:topicSlug',
    blogDetails: '/blog/details/:id/:slug',
    writeBlog: '/new-post',

    profile: '/@:username',
    myPost: '/me/posts',
    settings: '/settings',

    signin: '/a/signin',
    logout: '/a/logout',
};

export default routes;
