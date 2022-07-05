import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import TopicsList from '~/components/TopicsList';
import config from '~/config';
import styles from './Blog.module.scss';
import PostItem from './components/PostItem';

const cx = classNames.bind(styles);

function BlogPage() {
    const [blogsList, setBlogsList] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlogsList([1, 2, 3, 4, 5]);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={cx('top')}>
                <h1 className={cx('heading')}>Bài viết nổi bật</h1>
                <p className={cx('desc')}>
                    Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ
                    thuật lập trình web.
                </p>
            </div>
            <div className={cx('body')}>
                <Container className={cx('container')} fluid>
                    <Row gutterWidth={24}>
                        <Col xl={8} sm={12}>
                            <div className={cx('leftLayout')}>
                                {blogsList.length > 0 ? (
                                    blogsList.map(x => <PostItem key={x} />)
                                ) : (
                                    <p className={cx('msg')}>
                                        Chưa có bài viết nào. Hãy là người{' '}
                                        <Link to={config.routes.writeBlog}>viết bài đầu tiên</Link>
                                    </p>
                                )}
                            </div>
                        </Col>
                        <Col xl={4} sm={12}>
                            <div className={cx('rightLayout')}>
                                <TopicsList />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default BlogPage;
