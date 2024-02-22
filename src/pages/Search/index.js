import React from 'react';
import ContentEditable from '~/components/ContentEditable';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import BlogsList from '../Blog/BlogsList';
import { Col, Container, Row } from 'react-grid-system';

const cx = classNames.bind(styles);

const SearchPage = () => {
    return (
        <div>
            <ContentEditable className={cx('search-input')} placeholder="Tìm kiếm..." />
            <Container className={cx('container')} fluid>
                <Row gutterWidth={24}>
                    <Col xl={8} sm={12}>
                        {/* <div className={cx('blank')}>Chưa có kết quả nào phù hợp.</div> */}
                        <BlogsList
                            data={[
                                {
                                    id: 22,
                                    user_id: 'tesmwOiki2hjsRFz8MFMeBpxnEm1',
                                    topic_id: 2,
                                    published_at: '2023-08-18T03:42:53.000Z',
                                    is_published: 1,
                                    is_recommend: 0,
                                    is_deleted: 0,
                                    meta_title: "<script>alert('You has been hacked')</script/>",
                                    meta_description: null,
                                    slug: 'script-alert-you-has-been-hacked-script',
                                    min_read: 1,
                                    image_url: null,
                                    full_name: 'Jack Caooo',
                                    username: '@jackcaooo',
                                    avatar_url:
                                        'https://lh3.googleusercontent.com/a-/AFdZucr_2lzmnLR99l0Izh3tB52d6hYXhjYEDk6OGhHqmw=s96-c',
                                },
                                {
                                    id: 21,
                                    user_id: 'tesmwOiki2hjsRFz8MFMeBpxnEm1',
                                    topic_id: 2,
                                    published_at: '2023-08-18T03:42:41.000Z',
                                    is_published: 1,
                                    is_recommend: 0,
                                    is_deleted: 0,
                                    meta_title: "<script>alert('You has been hacked'</script>",
                                    meta_description: null,
                                    slug: 'script-alert-you-has-been-hacked-script',
                                    min_read: 1,
                                    image_url: null,
                                    full_name: 'Jack Caooo',
                                    username: '@jackcaooo',
                                    avatar_url:
                                        'https://lh3.googleusercontent.com/a-/AFdZucr_2lzmnLR99l0Izh3tB52d6hYXhjYEDk6OGhHqmw=s96-c',
                                },
                                {
                                    id: 19,
                                    user_id: 'tesmwOiki2hjsRFz8MFMeBpxnEm1',
                                    topic_id: 2,
                                    published_at: '2023-04-30T07:34:41.000Z',
                                    is_published: 1,
                                    is_recommend: 0,
                                    is_deleted: 0,
                                    meta_title: 'test',
                                    meta_description: null,
                                    slug: 'test',
                                    min_read: 1,
                                    image_url: null,
                                    full_name: 'Jack Caooo',
                                    username: '@jackcaooo',
                                    avatar_url:
                                        'https://lh3.googleusercontent.com/a-/AFdZucr_2lzmnLR99l0Izh3tB52d6hYXhjYEDk6OGhHqmw=s96-c',
                                },
                                {
                                    id: 17,
                                    user_id: 'tesmwOiki2hjsRFz8MFMeBpxnEm1',
                                    topic_id: 2,
                                    published_at: '2023-04-29T14:47:41.000Z',
                                    is_published: 1,
                                    is_recommend: 0,
                                    is_deleted: 0,
                                    meta_title: 'test sql injection',
                                    meta_description: '',
                                    slug: 'test-sql-injection',
                                    min_read: 1,
                                    image_url: null,
                                    full_name: 'Jack Caooo',
                                    username: '@jackcaooo',
                                    avatar_url:
                                        'https://lh3.googleusercontent.com/a-/AFdZucr_2lzmnLR99l0Izh3tB52d6hYXhjYEDk6OGhHqmw=s96-c',
                                },
                                {
                                    id: 16,
                                    user_id: 'tesmwOiki2hjsRFz8MFMeBpxnEm1',
                                    topic_id: 5,
                                    published_at: '2022-08-16T11:22:12.000Z',
                                    is_published: 1,
                                    is_recommend: 0,
                                    is_deleted: 0,
                                    meta_title: 'cuoi cung cung xong',
                                    meta_description: 'sau hon 1 thang cay cuoc toi da xong',
                                    slug: 'cuoi-cung-cung-xong',
                                    min_read: 3,
                                    image_url: null,
                                    full_name: 'Jack Caooo',
                                    username: '@jackcaooo',
                                    avatar_url:
                                        'https://lh3.googleusercontent.com/a-/AFdZucr_2lzmnLR99l0Izh3tB52d6hYXhjYEDk6OGhHqmw=s96-c',
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchPage;
