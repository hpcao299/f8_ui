import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopicsList from '~/components/TopicsList';
import styles from './Blog.module.scss';
import BlogsList from './BlogsList';
import BlogTitle from './BlogTitle';

import blogApi from '~/api/blogApi';

const cx = classNames.bind(styles);

function BlogPage() {
    const [blogsList, setBlogsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { topicId } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
            let data;
            setIsLoading(true);
            try {
                if (topicId) {
                    data = await blogApi.getPostsTopics(topicId);
                } else {
                    data = await blogApi.getNewPosts();
                }
                setBlogsList(data.data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchPosts();
    }, [topicId]);

    return (
        <>
            {!isLoading && (
                <>
                    <BlogTitle />

                    <div className={cx('body')}>
                        <Container className={cx('container')} fluid>
                            <Row gutterWidth={24}>
                                <>
                                    <Col xl={8} sm={12}>
                                        <div className={cx('leftLayout')}>
                                            <BlogsList data={blogsList} />
                                        </div>
                                    </Col>
                                    <Col xl={4} sm={12}>
                                        <div className={cx('rightLayout')}>
                                            <TopicsList hideCurrentTopic />
                                        </div>
                                    </Col>
                                </>
                            </Row>
                        </Container>
                    </div>
                </>
            )}
        </>
    );
}

export default BlogPage;
