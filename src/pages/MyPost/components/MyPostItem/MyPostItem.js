import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { checkDataExists, momentFromNow } from '~/utils';
import styles from './MyPostItem.module.scss';
import OptionsBtn from './OptionsBtn';

const cx = classNames.bind(styles);

function MyPostItem({ data, handleDeletePost }) {
    const renderLinkTo = () => {
        return data.is_published
            ? `/blog/details/${data.id}/${data.slug}`
            : `/post/${data?.id}/edit`;
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={renderLinkTo()}>
                <h3>{checkDataExists(data.meta_title)}</h3>
            </Link>
            <div className={cx('author')}>
                <Link to={`/post/${data?.id}/edit`}>
                    Chỉnh sửa {momentFromNow(data.updated_at)}
                </Link>
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
