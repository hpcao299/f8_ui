import MDEditor from '@uiw/react-md-editor';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import blogApi from '~/api/blogApi';
import Image from '~/components/Image';
import { momentFromNow } from '~/utils';
import styles from './RelatedPosts.module.scss';

const cx = classNames.bind(styles);

function RelatedPosts({ blog_id }) {
    const { data } = blogApi.useRelatedPosts(blog_id);
    const postsList = data?.data || [];

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('heading')}>Bài viết nổi bật khác</h3>

            {postsList.map(post => (
                <div key={post.id} className={cx('post')}>
                    <div className={cx('info')}>
                        Đăng bởi
                        <Link to="/@example">
                            <strong className={cx('full-name')}> {post.full_name}</strong>
                        </Link>
                        <span className={cx('dot')}>·</span>
                        <span className={cx('time')}>{momentFromNow(post.published_at)}</span>
                    </div>
                    <Link to={`/blog/details/${post.id}/${post.slug}`}>
                        <h3 className={cx('title')}>{post.title}</h3>
                    </Link>
                    {post.image_url && (
                        <Link to={`/blog/details/${post.id}/${post.slug}`}>
                            <Image src={post.image_url} alt={post.title} className={cx('photo')} />
                        </Link>
                    )}

                    <MDEditor.Markdown
                        className={styles.content}
                        source={post.content}
                        style={{ whiteSpace: 'pre-wrap' }}
                    />

                    <Link to={`/blog/details/${post.id}/${post.slug}`} className={styles.readMore}>
                        Xem tiếp · {post.min_read} phút đọc
                    </Link>
                </div>
            ))}
        </div>
    );
}

RelatedPosts.propTypes = {
    blog_id: PropTypes.number,
};

export default memo(RelatedPosts);
