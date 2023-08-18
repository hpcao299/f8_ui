import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Button from '~/components/Button';
import config from '~/config';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>Trang này không tồn tại</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className={cx('header')}>
                <Link to={config.routes.blog}>
                    <img src={images.logo} alt="F8" />
                </Link>
                <Link to={config.routes.blog}>
                    <h3>Học Lập Trình Để Đi Làm</h3>
                </Link>
            </div>

            <div className={cx('content')}>
                <h4 className={cx('error-code')}> </h4>
                <h1 className={cx('error-title')}>Không tìm thấy nội dung 😓</h1>
                <ul>
                    <li className={cx('message')}>
                        URL của nội dung này đã <strong>bị thay đổi</strong> hoặc{' '}
                        <strong>không còn tồn tại.</strong>
                    </li>
                    <li className={cx('message')}>
                        Nếu bạn <strong>đang lưu URL này</strong>, hãy{' '}
                        <strong>thử truy cập lại từ trang chủ</strong> thay vì dùng URL đã lưu.
                    </li>
                </ul>
                <p>
                    <Button primary size="large" to={config.routes.blog} className={cx('btn-link')}>
                        Quy cập trang blog
                    </Button>
                </p>
                <p>
                    👉 hoặc đi tới{' '}
                    <Button to={config.routes.myDraftsPost} className={cx('my-post-link')}>
                        Bài viết của tôi
                    </Button>
                </p>
            </div>

            <div className={cx('copyright')}>
                © 2018 - {new Date().getFullYear()} F8. Nền tảng học lập trình hàng đầu Việt Nam
            </div>
        </div>
    );
}

export default NotFound;
