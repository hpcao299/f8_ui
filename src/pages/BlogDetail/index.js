import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import MediaQuery from 'react-responsive';
import { useNavigate, useParams } from 'react-router-dom';

import { Suspense, lazy, useEffect, useState } from 'react';
import blogApi from '~/api/blogApi';
import TopicsList from '~/components/TopicsList';
import config from '~/config';
import MDContent from '../../components/MD/MDContent';
import BlogContent from './BlogContent';
import styles from './BlogDetail.module.scss';
import Reaction from './components/Reaction';

const RelatedPosts = lazy(() => import('./components/RelatedPosts'));
const SameAuthorPosts = lazy(() => import('./components/SameAuthorPosts'));

const cx = classNames.bind(styles);

function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [reactionDetails, setReactionDetails] = useState({
        reaction_counts: null,
        is_reacted: false,
    });
    const { data, isLoading, error } = blogApi.usePostDetails(id);
    const postDetails = data?.data;

    useEffect(() => {
        const fetchPostReaction = async () => {
            try {
                const { data } = await blogApi.getPostReaction(id);

                const isReacted = data.is_reacted === 1 ? true : false;

                setReactionDetails(() => ({
                    is_reacted: isReacted,
                    reaction_counts: data.reaction_counts,
                }));
            } catch (error) {
                console.error(error);
            }
        };

        fetchPostReaction();
    }, [id]);

    if (isLoading || !postDetails) return null;

    if (error) navigate(config.routes.notFound);

    return (
        <div className={cx('wrapper')}>
            <Container style={{ height: '100%' }} className={cx('container')}>
                <Row style={{ height: '100%' }} className={cx('row')}>
                    <MediaQuery minWidth={1113}>
                        <Col sm={0} md={0} lg={2} style={{ height: '100%' }}>
                            <div className={cx('aside')}>
                                <h4 className={cx('username')}>{postDetails.full_name}</h4>
                                {postDetails.bio && (
                                    <p className={cx('user-bio')}>{postDetails.bio}</p>
                                )}
                                <hr className={cx('divider')} />
                                <Reaction
                                    postDetails={postDetails}
                                    reactionDetails={reactionDetails}
                                    setReactionDetails={setReactionDetails}
                                />
                            </div>
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
                                    reactionDetails={reactionDetails}
                                    setReactionDetails={setReactionDetails}
                                />
                                <Suspense>
                                    <SameAuthorPosts blog_id={postDetails.id} />
                                </Suspense>
                                <Suspense>
                                    <RelatedPosts blog_id={postDetails.id} />
                                </Suspense>
                                <TopicsList />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BlogDetail;
