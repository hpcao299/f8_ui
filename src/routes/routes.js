import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Blog from '~/pages/Blog';
import CoursePage from '~/pages/Course';
import HomePage from '~/pages/Home';
import LearningPathPage from '~/pages/LearningPath';
import LoginPage from '~/pages/Login';
import MyPostPage from '~/pages/MyPost';
import ProfilePage from '~/pages/Profile';
import SettingPage from '~/pages/Setting';
import WriteBlogPage from '~/pages/WriteBlog';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.learningPaths, component: LearningPathPage },
    { path: config.routes.courses, component: CoursePage },

    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogTopics, component: Blog },
    {
        path: config.routes.writeBlog,
        component: WriteBlogPage,
        layout: HeaderOnly,
        props: {
            hideSearch: true,
            showPublishBtn: true,
        },
    },

    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.myPost, component: MyPostPage },
    { path: config.routes.settings, component: SettingPage, layout: HeaderOnly },

    { path: config.routes.login, component: LoginPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
