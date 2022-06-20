import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import UserMenu from '~/components/UserMenu';
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
        to: '/new-post',
    },
    {
        title: 'Bài viết của tôi',
        to: '/me/posts',
        separate: true,
    },
    {
        title: 'Bài viết đã lưu',
        to: '/me/bookmarks',
        separate: true,
    },
    {
        title: 'Cài đặt',
        to: '/settings',
    },
    {
        title: 'Đăng xuất',
        to: '/logout',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="F8" />
                <h4 className={cx('logoHeading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <div className={cx('body')}>
                <Search />
            </div>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Link to="/me/posts" className={cx('myPosts')}>
                            Bài viết của tôi
                        </Link>
                        <UserMenu items={USER_MENU} />
                    </>
                ) : (
                    <Link to="/login" className={cx('loginBtn')}>
                        Đăng nhập
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
