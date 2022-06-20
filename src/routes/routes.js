import config from '~/config';

// Layouts
import HeaderOnly from '~/layouts/HeaderOnly';

// Pages
import Blog from '~/pages/Blog';
import CoursePage from '~/pages/Course';
import HomePage from '~/pages/Home';
import LearningPathPage from '~/pages/LearningPath';
import WriteBlogPage from '~/pages/WriteBlog';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.learningPaths, component: LearningPathPage },
    { path: config.routes.courses, component: CoursePage },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.writeBlog, component: WriteBlogPage, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
