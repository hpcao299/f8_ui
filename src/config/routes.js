const routes = {
    home: '/',
    learningPaths: '/learning-paths',
    courses: '/courses',

    blog: '/blog',
    blogTopics: '/blog/:topicId/:topicSlug',
    blogDetails: '/blog/details/:id/:slug',
    writeBlog: '/new-post',
    editBlog: '/post/:blogId/edit',

    profile: '/:id/:username',
    myDraftsPost: '/me/posts/drafts',
    myPublishedPost: '/me/posts/published',
    settings: '/settings',

    signin: '/a/signin',
    logout: '/a/logout',

    notFound: '/not-found',
};

export default routes;
