import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import styles from './Blog.module.scss';
import PostItem from './components/PostItem';
import TopicsList from './components/TopicsList';

const cx = classNames.bind(styles);

function BlogPage() {
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
                                {[1, 2, 3, 4, 5].map(x => (
                                    <PostItem key={x} />
                                ))}
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
