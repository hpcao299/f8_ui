import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper', 'd-flex-center')}>
            <div className={cx('icon')}></div>
            <input placeholder="Tìm kiếm khóa học, bài viết, video, ..." />
        </div>
    );
}

export default Search;
