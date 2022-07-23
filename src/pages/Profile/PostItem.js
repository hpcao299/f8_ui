import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { checkDataExists } from '~/utils';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function PostItem({ post }) {
    return (
        <div className={cx('post')}>
            <Link to={`/blog/details/${post.id}/${post.slug}`} className={cx('thumb')}>
                <Image src={post.image_url} alt={post.meta_title ? post.meta_title : post.title} />
            </Link>
            <div className={cx('info')}>
                <Link to={`/blog/details/${post.id}/${post.slug}`}>
                    <h3 className={cx('info-title')}>
                        {post.meta_title ? post.meta_title : post.title}
                    </h3>
                </Link>
                <p className={cx('info-desc')}>{checkDataExists(post.meta_description)}</p>
            </div>
        </div>
    );
}

PostItem.propTypes = {
    post: PropTypes.object,
};

export default PostItem;
