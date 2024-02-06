import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import MediaQuery from 'react-responsive';

import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import TopicsList from '~/components/TopicsList';
import styles from './Blog.module.scss';
import BlogTitle from './BlogTitle';
import BlogsList from './BlogsList';

const cx = classNames.bind(styles);

function BlogPage() {
    const { topicId } = useParams();
    const apiEndpoint = topicId ? `/blogs/topic/${topicId}` : '/blogs';
    const { data, isLoading } = useSWR(apiEndpoint);

    return (
        <>
            {!isLoading && (
                <>
                    <BlogTitle />

                    <MediaQuery maxWidth={1023}>
                        <TopicsList hideCurrentTopic />
                    </MediaQuery>

                    <div className={cx('body')}>
                        <Container className={cx('container')} fluid>
                            <Row gutterWidth={24}>
                                <>
                                    <Col xl={8} sm={12}>
                                        <div className={cx('leftLayout')}>
                                            <BlogsList data={data.data} />
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
