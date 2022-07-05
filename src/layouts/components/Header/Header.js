import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
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
        to: config.routes.signin,
    },
];

function Header({ hideSearch = false, showPublishBtn = false }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}>
                    <Image src={images.logo} alt="F8" />
                </Link>
                <h4 className={cx('logoHeading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            {!hideSearch && (
                <div className={cx('body')}>
                    <Search />
                </div>
            )}

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        {showPublishBtn && (
                            <Button
                                className={cx('publishBtn')}
                                onClick={() => console.log('click')}
                                primary
                                disabled
                            >
                                Xuất bản
                            </Button>
                        )}
                        <Link to={config.routes.myPost} className={cx('myPosts')}>
                            Bài viết của tôi
                        </Link>
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
};

export default Header;
