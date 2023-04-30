import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import MediaQuery from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';

import blogApi from '~/api/blogApi';
import TopicsList from '~/components/TopicsList';
import config from '~/config';
import MDContent from '../../components/MD/MDContent';
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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPostDetails = async () => {
            setIsLoading(true);
            try {
                const { data } = await blogApi.getPostDetails(id);
                setPostDetails(data);
            } catch (error) {
                console.error(error);
                navigate(config.routes.notFound);
            }
            setIsLoading(false);
        };

        fetchPostDetails();
    }, [id, navigate]);

    return (
        <div className={cx('wrapper')}>
            {!isLoading && postDetails && (
                <Container style={{ height: '100%' }} className={cx('container')}>
                    <Row style={{ height: '100%' }} className={cx('row')}>
                        <MediaQuery minWidth={1113}>
                            <Col sm={0} md={0} lg={2} style={{ height: '100%' }}>
                                <UserDetails
                                    postDetails={postDetails}
                                    setPostDetails={setPostDetails}
                                />
                            </Col>
                        </MediaQuery>
                        <Col
                            sm={12}
                            md={12}
                            lg={8}
                            style={{ height: '100%' }}
                            className={cx('rightLayout')}
                        >
                            <div className={cx('content') + ' md-preview'}>
                                <BlogContent postDetails={postDetails} />

                                <MDContent content={postDetails.content} />

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
