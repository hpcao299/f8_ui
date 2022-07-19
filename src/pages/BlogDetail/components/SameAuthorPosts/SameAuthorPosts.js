import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogApi from '~/api/blogApi';
import styles from './SameAuthorPosts.module.scss';
function SameAuthorPosts({ blog_id }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchSameAuthorPosts = async () => {
            try {
                const { data } = await blogApi.getSameAuthorPosts(blog_id);
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSameAuthorPosts();
    }, [blog_id]);

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

export default SameAuthorPosts;
