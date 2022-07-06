import classNames from 'classnames/bind';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Logo() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <div className={cx('logo')}>
            <Link to={config.routes.home}>
                <Image src={images.logo} alt="F8" />
            </Link>
            {pathname === '/blog' ? (
                <h4 className={cx('logoHeading')}>Học Lập Trình Để Đi Làm</h4>
            ) : (
                <Link className={cx('goBack')} to="/blog" onClick={handleGoBack}>
                    <h4 className={cx('logoHeading')}>
                        <FiChevronLeft />
                        <span>Quay lại</span>
                    </h4>
                </Link>
            )}
        </div>
    );
}

export default Logo;
