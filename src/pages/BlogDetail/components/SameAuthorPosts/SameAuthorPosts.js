import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import blogApi from '~/api/blogApi';
import styles from './SameAuthorPosts.module.scss';

function SameAuthorPosts({ blog_id }) {
    const { data } = blogApi.useSameAuthorPosts(blog_id);
    const posts = data?.data || [];

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>Bài đăng cùng tác giả</h3>
            {posts.length > 0 ? (
                <ul className={styles.list}>
                    {posts.map(post => (
                        <li key={post.id}>
                            <Link key={post.id} to={`/blog/details/${post.id}/${post.slug}`}>
                                {post.meta_title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noResult}>Tác giả chưa có bài đăng nào khác.</p>
            )}
        </div>
    );
}

SameAuthorPosts.propTypes = {
    user_id: PropTypes.string,
};

export default memo(SameAuthorPosts);
