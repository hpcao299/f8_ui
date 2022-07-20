import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { FaRegBookmark } from 'react-icons/fa';
import { IoEllipsisHorizontalOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { momentFromNow } from '~/utils';
import styles from './BlogDetail.module.scss';

const cx = classNames.bind(styles);

function BlogContent({ postDetails }) {
    return (
        <>
            <Helmet>
                <title>{postDetails.title}</title>
            </Helmet>

            <h1 className={cx('heading')}>{postDetails.title}</h1>
            <div className={cx('header')}>
                <div className={cx('user')}>
                    <Link
                        to={`/${postDetails.user_id}/${postDetails.username}`}
                        className={cx('avatar')}
                    >
                        <Image src={postDetails.avatar_url} alt={postDetails.full_name} isAvatar />
                    </Link>
                    <div className={cx('info')}>
                        <Link to={`/${postDetails.user_id}/${postDetails.username}`}>
                            <p className={cx('name')}>{postDetails.full_name}</p>
                        </Link>
                        <p className={cx('time')}>
                            {momentFromNow(postDetails.published_at)}
                            <span className={cx('dot')}>·</span>
                            {postDetails.min_read} phút đọc
                        </p>
                    </div>
                </div>

                <div className={cx('actions')}>
                    <button>
                        <FaRegBookmark />
                    </button>
                    <button>
                        <IoEllipsisHorizontalOutline />
                    </button>
                </div>
            </div>
        </>
    );
}

BlogContent.propTypes = {
    postDetails: PropTypes.object.isRequired,
};

export default BlogContent;
