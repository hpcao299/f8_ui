import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import blogApi from '~/api/blogApi';
import ContentEditable from '~/components/ContentEditable';
import config from '~/config';
import PostItem from '../Blog/components/PostItem';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [value, setValue] = useState(searchParams.get('q') || '');
    const [query] = useDebounce(value, 400);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const handleChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        const searchPosts = async () => {
            setIsLoading(true);
            try {
                const data = await blogApi.searchPosts(query.trim());

                setData(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (query.length >= 2) {
            searchPosts();
        } else {
            setData([]);
        }
    }, [query]);

    return (
        <div>
            <Helmet>
                <title>{config.titles.search}</title>
            </Helmet>

            <ContentEditable
                className={cx('search-input', { 'search-empty': value.length === 0 })}
                placeholder="Tìm kiếm..."
                defaultValue={searchParams.get('q')}
                onChange={handleChange}
            />
            <Container className={cx('container')} fluid>
                <Row gutterWidth={24}>
                    {value.length > 0 && (
                        <Col xl={8} sm={12}>
                            {isLoading ? (
                                <div className={cx('blank')}>Đang tìm kiếm...</div>
                            ) : (
                                <>
                                    {data.length === 0 ? (
                                        <div className={cx('blank')}>
                                            Chưa có kết quả nào phù hợp.
                                        </div>
                                    ) : (
                                        <>
                                            {data.map(data => (
                                                <PostItem key={data.id} data={data} />
                                            ))}
                                        </>
                                    )}
                                </>
                            )}
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default SearchPage;
