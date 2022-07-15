import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MyPostItem.module.scss';
import OptionsBtn from './OptionsBtn';

const cx = classNames.bind(styles);

function MyPostItem({ data, handleDeletePost }) {
    return (
        <div className={cx('wrapper')}>
            <h3>{data.meta_title}</h3>
            <div className={cx('author')}>
                <Link to={`/post/${data?.id}/edit`}>Chỉnh sửa 3 ngày trước</Link>
                <span className={cx('dot')}>·</span>
                <span>1 phút đọc</span>
            </div>
            <OptionsBtn data={data} handleDeletePost={handleDeletePost} />
        </div>
    );
}

MyPostItem.propTypes = {
    data: PropTypes.object.isRequired,
    handleDeletePost: PropTypes.func.isRequired,
};

export default MyPostItem;
