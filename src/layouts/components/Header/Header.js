import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const currentUser = true;

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="F8" />
                <h4 className={cx('logo-heading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <div className={cx('body')}>
                <Search />
            </div>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Link to="/me/posts" className={cx('my-posts')}>
                            Bài viết của tôi
                        </Link>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dd75c7a1936f6217f819a82baa2de432~c5_100x100.jpeg?x-expires=1655794800&x-signature=Dp6dmJHXPM65ZFtmD9N3ms1f%2Fug%3D"
                            alt="Avatar"
                        />
                    </>
                ) : (
                    <Link to="/login" className={cx('login-btn')}>
                        Đăng nhập
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
