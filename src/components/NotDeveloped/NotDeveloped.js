import classNames from 'classnames/bind';
import Button from '~/components/Button';
import config from '~/config';
import styles from './NotDeveloped.module.scss';

const cx = classNames.bind(styles);

function NotDeveloped() {
    return (
        <div className={cx('wrapper', 'd-flex-center')}>
            <h1 className={cx('heading')}>Chưa phát triển nội dung 😓</h1>
            <div className={cx('message')}>
                Nội dung này chưa <strong>được phát triển</strong>.
            </div>
            <div className={cx('message')}>
                Hiện tại, web chỉ mới hỗ trợ <strong>trang blog</strong>.
            </div>
            <Button to={config.routes.blog} size="large" primary>
                Đi đến trang blog
            </Button>
        </div>
    );
}

export default NotDeveloped;
