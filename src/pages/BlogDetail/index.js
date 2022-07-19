import MDEditor from '@uiw/react-md-editor';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useParams } from 'react-router-dom';

import blogApi from '~/api/blogApi';
import TopicsList from '~/components/TopicsList';
import BlogContent from './BlogContent';
import styles from './BlogDetail.module.scss';
import Reaction from './components/Reaction';
import RelatedPosts from './components/RelatedPosts';
import SameAuthorPosts from './components/SameAuthorPosts';
import UserDetails from './UserDetails';

const cx = classNames.bind(styles);

function BlogDetail() {
    const { id } = useParams();
    const [postDetails, setPostDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPostDetails = async () => {
            setIsLoading(true);
            try {
                const { data } = await blogApi.getPostDetails(id);
                setPostDetails(data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchPostDetails();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            {!isLoading && postDetails && (
                <Container style={{ height: '100%' }}>
                    <Row style={{ height: '100%' }}>
                        <Col sm={0} md={0} lg={2} style={{ height: '100%' }}>
                            <UserDetails
                                postDetails={postDetails}
                                setPostDetails={setPostDetails}
                            />
                        </Col>
                        <Col sm={12} md={12} lg={8} style={{ height: '100%' }}>
                            <div className={cx('content')}>
                                <BlogContent postDetails={postDetails} />

                                <MDEditor.Markdown
                                    source={postDetails.content}
                                    style={{ whiteSpace: 'pre-wrap' }}
                                />

                                <div className={cx('body-bottom')}>
                                    <Reaction
                                        postDetails={postDetails}
                                        setPostDetails={setPostDetails}
                                    />
                                    <SameAuthorPosts blog_id={postDetails.id} />
                                    <RelatedPosts blog_id={postDetails.id} />
                                    <TopicsList />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default BlogDetail;
