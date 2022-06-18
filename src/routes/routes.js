// Layouts
import HeaderOnly from '~/layouts/HeaderOnly';

// Pages
import Blog from '~/pages/Blog';
import CoursePage from '~/pages/Course';
import HomePage from '~/pages/Home';
import LearningPathPage from '~/pages/LearningPath';
import WriteBlogPage from '~/pages/WriteBlog';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/learning-paths', component: LearningPathPage },
    { path: '/courses', component: CoursePage },
    { path: '/blogs', component: Blog },
    { path: '/new-post', component: WriteBlogPage, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
