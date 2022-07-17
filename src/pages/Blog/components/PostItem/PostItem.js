import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { checkDataExists, momentFromNow } from '~/utils';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')}>
                    <Link to={`/${data.username}`}>
                        <Image isAvatar src={data.avatar_url} alt={data.full_name} />
                    </Link>
                    <Link to={`/${data.username}`}>
                        <span>{data.full_name}</span>
                    </Link>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Link to={`/blog/details/${data.id}/${data.slug}`}>
                        <h3>{checkDataExists(data.meta_title)}</h3>
                    </Link>
                    <p>{checkDataExists(data.meta_description)}</p>
                    <div>
                        <span>{momentFromNow(data.published_at)}</span>
                        <span className={cx('dot')}>·</span>
                        <span>2 phút đọc</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

PostItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PostItem;
