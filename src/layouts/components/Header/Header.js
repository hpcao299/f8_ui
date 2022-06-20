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
                        <UserMenu items={USER_MENU}>
                            <img
                                className={cx('avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dd75c7a1936f6217f819a82baa2de432~c5_100x100.jpeg?x-expires=1655794800&x-signature=Dp6dmJHXPM65ZFtmD9N3ms1f%2Fug%3D"
                                alt="Avatar"
                            />
                        </UserMenu>
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
