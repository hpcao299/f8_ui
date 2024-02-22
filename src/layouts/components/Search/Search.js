import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import blogApi from '~/api/blogApi';

const cx = classNames.bind(styles);

function Search() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query] = useDebounce(value, 400);

    const handleFocusSearch = () => {
        if (value) setVisible(true);
    };

    const handleChangeSearch = e => {
        setValue(e.target.value);

        setVisible(e.target.value ? true : false);
    };

    const onModalHidden = () => {
        setIsLoading(true);
    };

    useEffect(() => {
        const searchPosts = async () => {
            setIsLoading(true);
            try {
                const data = await blogApi.searchPosts(query.trim(), 5);

                setData(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (query.length >= 2) {
            searchPosts();
        }
    }, [query]);

    return (
        <div className={cx('wrapper', 'd-flex-center')}>
            <div className={cx('icon')}></div>
            <input
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                onFocus={handleFocusSearch}
                value={value}
                onChange={handleChangeSearch}
            />

            <div className={cx('result-wrapper')}>
                <Tippy
                    content={
                        <div className={cx('result')}>
                            <div className={cx('header')}>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="magnifying-glass"
                                    className="svg-inline--fa fa-magnifying-glass Search_icon__j+Y7z"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                    ></path>
                                </svg>{' '}
                                <span>
                                    {isLoading
                                        ? 'Tìm'
                                        : data.length === 0
                                        ? 'Không tìm thấy kết quả cho'
                                        : 'Kết quả cho'}{' '}
                                    '{value}'
                                </span>
                            </div>
                            {!isLoading && data.length > 0 && (
                                <>
                                    <div className={cx('heading')}>
                                        <h5>Bài viết</h5>
                                        <Link to={`/search?q=${value}`} className={cx('see-more')}>
                                            Xem thêm
                                        </Link>
                                    </div>
                                    {data.map(item => (
                                        <Link
                                            key={item.id}
                                            to={`/blog/details/${item.id}/${item.slug}`}
                                            className={cx('search-item')}
                                        >
                                            <img
                                                src={item.avatar_url}
                                                alt={item.full_name}
                                                className={cx('search-img')}
                                            />
                                            <div className={cx('search-details')}>
                                                <span className={cx('search-title')}>
                                                    {item.meta_title}
                                                </span>
                                                <span className={cx('search-min-read')}>
                                                    {item.min_read} phút đọc
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </>
                            )}
                        </div>
                    }
                    interactive
                    animation="shift-away"
                    offset={[20, 30]}
                    placement="bottom-end"
                    maxWidth="max-content"
                    visible={visible}
                    onClickOutside={() => setVisible(false)}
                    onHidden={onModalHidden}
                >
                    <div></div>
                </Tippy>
            </div>
        </div>
    );
}

export default Search;
