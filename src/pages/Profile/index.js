import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useParams } from 'react-router-dom';

import userApi from '~/api/userApi';
import images from '~/assets/images';
import Box from '~/components/Box';
import { UserGroupIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { momentFromNow } from '~/utils';
import PostItem from './PostItem';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function ProfilePage() {
    const { id } = useParams();
    const [postsList, setPostsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchProfilePosts = async () => {
            setIsLoading(true);
            try {
                const { data } = await userApi.getProfileDetails(id);
                setPostsList(data.posts);
                setUser(data.user);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchProfilePosts();
    }, [id]);

    return !isLoading ? (
        <Container style={{ padding: '0 20px' }}>
            <div className={cx('cover')} style={{ backgroundImage: `url(${images.coverProfile})` }}>
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                        <Image src={user.avatar_url} alt={user.full_name} isAvatar />
                    </div>
                    <div className={cx('username')}>
                        <div>{user.full_name}</div>
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <Container style={{ padding: 0 }}>
                    <Row gutterWidth={24}>
                        <Col sm={12} md={12} lg={5}>
                            <Box title="Giới thiệu">
                                <div className={cx('bio')}>{user.bio}</div>
                                <div className={cx('participate-time')}>
                                    <div className={cx('participate-time-icon')}>
                                        <UserGroupIcon />
                                    </div>
                                    <span>
                                        Thành viên của <strong>F8 - Học lập trình để đi làm</strong>{' '}
                                        từ {momentFromNow(user.joined_at)}
                                    </span>
                                </div>
                            </Box>
                        </Col>
                        <Col sm={12} md={12} lg={7}>
                            <Box title="Các bài viết đã đăng">
                                {postsList.map(post => (
                                    <PostItem key={post.id} post={post} />
                                ))}
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    ) : null;
}

export default ProfilePage;
