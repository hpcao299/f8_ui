import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import UserMenu from '~/components/UserMenu';
import config from '~/config';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const currentUser = true;

const USER_MENU = [
    {
        title: 'Trang cá nhân',
        to: '/@nguyenvana',
        separate: true,
    },
    {
        title: 'Viết blog',
        to: config.routes.writeBlog,
    },
    {
        title: 'Bài viết của tôi',
        to: config.routes.myPost,
        separate: true,
    },
    {
        title: 'Bài viết đã lưu',
        to: config.routes.myPost,
        separate: true,
    },
    {
        title: 'Cài đặt',
        to: config.routes.settings,
    },
    {
        title: 'Đăng xuất',
        to: config.routes.login,
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="F8" />
                </Link>
                <h4 className={cx('logoHeading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <div className={cx('body')}>
                <Search />
            </div>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Link to={config.routes.myPost} className={cx('myPosts')}>
                            Bài viết của tôi
                        </Link>
                        <UserMenu items={USER_MENU} />
                    </>
                ) : (
                    <Link to={config.routes.login} className={cx('loginBtn')}>
                        Đăng nhập
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
