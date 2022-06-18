import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="F8" />
                <h4 className={cx('logo-heading')}>Học Lập Trình Để Đi Làm</h4>
            </div>

            <div className={cx('body')}></div>

            <div className={cx('actions')}></div>
        </header>
    );
}

export default Header;
