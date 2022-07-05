import { Link } from 'react-router-dom';
import styles from './SameAuthorPosts.module.scss';

function SameAuthorPosts() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>Bài đăng cùng tác giả</h3>
            <ul className={styles.list}>
                <li>
                    <Link to="/blog/example-post">
                        Setup Môi Trường Lập Trình Nhanh Chóng Cho Desktop. Phần 2: Setup cho
                        Windows
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SameAuthorPosts;
