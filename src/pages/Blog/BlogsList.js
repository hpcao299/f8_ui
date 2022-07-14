import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Blog.module.scss';
import PostItem from './components/PostItem';

const cx = classNames.bind(styles);

function BlogsList({ data }) {
    const renderPosts = () => data.map(data => <PostItem key={data.id} data={data} />);

    return (
        <>
            {data.length > 0 ? (
                renderPosts()
            ) : (
                <p className={cx('msg')}>
                    Chưa có bài viết nào. Hãy là người{' '}
                    <Link to={config.routes.writeBlog}>viết bài đầu tiên</Link>
                </p>
            )}
        </>
    );
}

BlogsList.propTypes = {
    data: PropTypes.array,
};

export default BlogsList;
