import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaUser, FaCog } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HomeIcon, LightBulbIcon, LogoutIcon, NewspaperIcon, RoadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Modal from '~/components/Modal';
import config from '~/config';
import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

const MOBILE_MENU_LINKS_LIST = [
    {
        title: 'Trang chủ',
        to: config.routes.home,
        icon: HomeIcon,
    },
    {
        title: 'Lộ trình',
        to: config.routes.learningPaths,
        icon: RoadIcon,
    },
    {
        title: 'Khoá học',
        to: config.routes.courses,
        icon: LightBulbIcon,
    },
    {
        title: 'Blog',
        to: config.routes.blog,
        icon: NewspaperIcon,
    },
];

function MobileMenu() {
    const [isShown, setIsShown] = useState(false);
    const { currentUser } = useSelector(state => state.auth);
    const menuBodyRef = useRef();

    const LOGGED_IN_LINKS_LIST = [
        {
            to: `/${currentUser?.id}/${currentUser?.username}`,
            title: 'Trang cá nhân',
            icon: FaUser,
        },
        {
            to: config.routes.myDraftsPost,
            title: 'Bài viết của tôi',
            icon: NewspaperIcon,
        },
        {
            to: config.routes.settings,
            title: 'Cài đặt',
            icon: FaCog,
        },
    ];

    useEffect(() => {
        const handleOutsideClick = e => {
            if (menuBodyRef.current && !menuBodyRef.current.contains(e.target)) {
                setIsShown(false);
            }
        };

        if (isShown) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isShown]);

    const handleToggleModal = () => {
        setIsShown(!isShown);
    };

    return (
        <>
            <div className={cx('wrapper', 'd-flex', 'al-center')} onClick={handleToggleModal}>
                <FaBars />
            </div>
            <Modal isShown={isShown} className={cx('modal')} duration={500}>
                <div
                    ref={menuBodyRef}
                    className={cx('body', {
                        slideIn: isShown,
                        slideOut: !isShown,
                    })}
                >
                    <div className={cx('content')}>
                        {currentUser ? (
                            <div className={cx('user')}>
                                <Image
                                    src={currentUser.avatar_url}
                                    alt={currentUser.full_name}
                                    isAvatar
                                    className={cx('avatar')}
                                />
                                <h6 className={cx('user-name')}>{currentUser.full_name}</h6>
                            </div>
                        ) : (
                            <ul className={cx('list')}>
                                <li>
                                    <NavLink
                                        to={config.routes.signin}
                                        className={({ isActive }) =>
                                            isActive ? styles.active : ''
                                        }
                                        onClick={handleToggleModal}
                                    >
                                        <em>
                                            <LogoutIcon />
                                        </em>
                                        Đăng nhập
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                        {currentUser && (
                            <ul className={cx('list')}>
                                {LOGGED_IN_LINKS_LIST.map((link, index) => {
                                    const Icon = link.icon;

                                    return (
                                        <li key={index}>
                                            <NavLink
                                                to={link.to}
                                                className={({ isActive }) =>
                                                    isActive ? styles.active : ''
                                                }
                                                onClick={handleToggleModal}
                                            >
                                                <em>
                                                    <Icon />
                                                </em>
                                                {link.title}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        <ul className={cx('list')}>
                            {MOBILE_MENU_LINKS_LIST.map((link, index) => {
                                const Icon = link.icon;

                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={link.to}
                                            className={({ isActive }) =>
                                                isActive ? styles.active : ''
                                            }
                                            onClick={handleToggleModal}
                                        >
                                            <em>
                                                <Icon />
                                            </em>
                                            {link.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                        {currentUser && (
                            <ul className={cx('list')}>
                                <li>
                                    <NavLink
                                        to={config.routes.logout}
                                        className={({ isActive }) =>
                                            isActive ? styles.active : ''
                                        }
                                        onClick={handleToggleModal}
                                    >
                                        <em>
                                            <LogoutIcon />
                                        </em>
                                        Đăng xuất
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default MobileMenu;
