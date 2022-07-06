import config from '~/config';

// Layouts
import { HeaderOnly, MovableSidebar, NoNav, TransparentHeader } from '~/layouts';

// Pages
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail';
import CoursePage from '~/pages/Course';
import HomePage from '~/pages/Home';
import LearningPathPage from '~/pages/LearningPath';
import MyPostPage from '~/pages/MyPost';
import ProfilePage from '~/pages/Profile';
import SettingPage from '~/pages/Setting';
import SigninPage from '~/pages/Signin';
import WriteBlogPage from '~/pages/WriteBlog';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.learningPaths, component: LearningPathPage },
    { path: config.routes.courses, component: CoursePage },

    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogTopics, component: Blog },
    { path: config.routes.blogDetails, component: BlogDetail, layout: MovableSidebar },
    {
        path: config.routes.writeBlog,
        component: WriteBlogPage,
        layout: HeaderOnly,
        props: {
            hideSearch: true,
            showPublishBtn: true,
        },
    },

    { path: config.routes.profile, component: ProfilePage, layout: TransparentHeader },
    { path: config.routes.myPost, component: MyPostPage },
    { path: config.routes.settings, component: SettingPage, layout: HeaderOnly },

    { path: config.routes.signin, component: SigninPage, layout: NoNav },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
