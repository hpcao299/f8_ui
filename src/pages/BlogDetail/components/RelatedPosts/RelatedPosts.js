import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './RelatedPosts.module.scss';

const cx = classNames.bind(styles);

function RelatedPosts() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Bài viết nổi bật khác</h3>

            <div className={cx('post')}>
                <div className={cx('info')}>
                    Đăng bởi
                    <Link to="/@example">
                        <strong className={cx('full-name')}> Son Dang</strong>
                    </Link>
                    <span className={cx('dot')}>·</span>
                    <span className={cx('time')}>10 tháng trước</span>
                </div>
                <Link to="/blog/example-post">
                    <h3 className={cx('title')}>Tổng hợp các sản phẩm của học viên tại F8 👏👏</h3>
                </Link>
                <Link to="/blog/example-post">
                    <Image
                        src="https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png"
                        alt="Example image"
                        className={cx('photo')}
                    />
                </Link>
            </div>
        </div>
    );
}

export default RelatedPosts;
