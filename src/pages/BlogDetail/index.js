import classNames from 'classnames/bind';
import styles from './BlogDetail.module.scss';

const cx = classNames.bind(styles);

function BlogDetail() {
    return <div className={cx('wrapper')}>BlogDetail</div>;
}

export default BlogDetail;
