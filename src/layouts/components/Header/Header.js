import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import UserMenu from '~/components/UserMenu';
import config from '~/config';
import Search from '../Search';
import styles from './Header.module.scss';
import Logo from './Logo';
import PublishBtn from './PublishBtn';

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
        disabled: true,
    },
    {
        title: 'Cài đặt',
        to: config.routes.settings,
    },
    {
        title: 'Đăng xuất',
        to: config.routes.signin,
    },
];

function Header({ hideSearch = false, showPublishBtn = false, transparent = false }) {
    if (transparent) {
        hideSearch = true;
    }

    return (
        <header className={cx('wrapper', { transparent })}>
            <Logo />

            {!hideSearch && (
                <div className={cx('body')}>
                    <Search />
                </div>
            )}

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        {showPublishBtn && <PublishBtn />}
                        {!transparent && (
                            <Link to={config.routes.myPost} className={cx('myPosts')}>
                                Bài viết của tôi
                            </Link>
                        )}
                        <UserMenu items={USER_MENU} />
                    </>
                ) : (
                    <Button to={config.routes.signin} primary>
                        Đăng nhập
                    </Button>
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    hideSearch: PropTypes.bool,
    showPublishBtn: PropTypes.bool,
    transparent: PropTypes.bool,
};

export default Header;
