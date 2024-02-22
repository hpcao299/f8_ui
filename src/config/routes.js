const routes = {
    home: '/',
    search: '/search',
    learningPaths: '/learning-paths',
    courses: '/courses',

    blog: '/blog',
    blogTopics: '/blog/:topicId/:topicSlug',
    blogDetails: '/blog/details/:id/:slug',
    writeBlog: '/new-post',
    editBlog: '/post/:blogId/edit',
    search: '/search',

    profile: '/:id/:username',
    myDraftsPost: '/me/posts/drafts',
    myPublishedPost: '/me/posts/published',
    settings: '/settings',

    signin: '/auth/signin',
    logout: '/auth/logout',

    notFound: '/not-found',
};

export default routes;
