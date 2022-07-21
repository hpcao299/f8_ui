import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import UserMenu from '~/components/UserMenu';
import config from '~/config';
import { auth } from '~/config/firebase';
import Search from '../Search';
import styles from './Header.module.scss';
import Logo from './Logo';
import PublishBtn from './PublishBtn';

const cx = classNames.bind(styles);

function Header({
    hideSearch = false,
    showPublishBtn = false,
    transparent = false,
    movingHeader = false,
}) {
    const { currentUser } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [direction, setDirection] = useState('appear');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScrollWindow = () => {
            const scrollY = window.scrollY;
            if (scrollY > 200 && scrollY > lastScrollY) {
                setDirection('disappear');
            } else {
                setDirection('appear');
            }
            lastScrollY = scrollY;
        };

        if (movingHeader) {
            window.addEventListener('scroll', handleScrollWindow);
        }

        return () => window.removeEventListener('scroll', handleScrollWindow);
    }, [movingHeader]);

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate(config.routes.signin);
        });
    };

    const USER_MENU = [
        {
            title: 'Trang cá nhân',
            to: `/${currentUser?.id}/${currentUser?.username}`,
            separate: true,
        },
        {
            title: 'Viết blog',
            to: config.routes.writeBlog,
        },
        {
            title: 'Bài viết của tôi',
            to: config.routes.myDraftsPost,
            separate: true,
        },
        {
            title: 'Bài viết đã lưu',
            to: config.routes.myDraftsPost,
            separate: true,
            disabled: true,
        },
        {
            title: 'Cài đặt',
            to: config.routes.settings,
        },
        {
            title: 'Đăng xuất',
            to: config.routes.logout,
            onClick: handleLogout,
        },
    ];

    if (transparent) {
        hideSearch = true;
    }

    return (
        <header className={cx('wrapper', { transparent, moveOut: direction === 'disappear' })}>
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
                            <Link to={config.routes.myDraftsPost} className={cx('myPosts')}>
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
    movingHeader: PropTypes.bool,
};

export default Header;
