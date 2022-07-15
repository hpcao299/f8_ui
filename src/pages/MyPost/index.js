import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

import blogApi from '~/api/blogApi';
import config from '~/config';
import HeadingTabs from './components/HeadingTabs';
import MyPostItem from './components/MyPostItem';
import styles from './MyPost.module.scss';

const cx = classNames.bind(styles);

function MyPostPage() {
    const [postsList, setPostsList] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchMyPosts = async () => {
            let data;
            setPostsList([]);
            try {
                if (pathname === config.routes.myDraftsPost) {
                    data = await blogApi.getDraftsPosts();
                } else if (pathname === config.routes.myPublishedPost) {
                    data = await blogApi.getPublishedPosts();
                }
                setPostsList(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMyPosts();
    }, [pathname]);

    const renderMessage = () => {
        let message;
        if (pathname === config.routes.myDraftsPost) {
            message = 'Chưa có bản nháp nào.';
        } else if (pathname === config.routes.myPublishedPost) {
            message = 'Chưa có xuất bản nào.';
        }

        return (
            <div className={cx('noResult')}>
                <p>{message}</p>
                <p>
                    Bạn có thể <Link to={config.routes.writeBlog}>viết bài mới</Link> hoặc{' '}
                    <Link to={config.routes.blog}>đọc bài viết</Link> khác trên F8 nhé.
                </p>
            </div>
        );
    };

    const handleDeletePost = async id => {
        try {
            await blogApi.deletePost(id);
            const posts = postsList.filter(post => post.id !== id);
            setPostsList(posts);
        } catch (error) {
            console.error(error);
        }
    };

    const renderPosts = () =>
        postsList.map(post => (
            <MyPostItem key={post.id} data={post} handleDeletePost={handleDeletePost} />
        ));

    return (
        <>
            <Helmet>
                <title>{config.titles.myPost}</title>
            </Helmet>
            <div className={cx('top')}>
                <h1 className={cx('heading')}>Bài viết của tôi</h1>
            </div>
            <Row>
                <Col sm={12} md={12} lg={8}>
                    <HeadingTabs />
                    {postsList.length ? renderPosts() : renderMessage()}
                </Col>
                <Col sm={12} md={12} lg={4}></Col>
            </Row>
        </>
    );
}

export default MyPostPage;
