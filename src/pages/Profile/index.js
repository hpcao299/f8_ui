import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useNavigate, useParams } from 'react-router-dom';

import userApi from '~/api/userApi';
import images from '~/assets/images';
import Box from '~/components/Box';
import { UserGroupIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import { momentFromNow } from '~/utils';
import SocialLink from './components/SocialLink';
import PostItem from './PostItem';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function ProfilePage() {
    const { id } = useParams();
    const [postsList, setPostsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfilePosts = async () => {
            setIsLoading(true);
            try {
                const { data } = await userApi.getProfileDetails(id);
                setPostsList(data.posts);
                setUser(data.user);
            } catch (error) {
                console.error(error);
                navigate(config.routes.notFound);
            }
            setIsLoading(false);
        };

        fetchProfilePosts();
    }, [id, navigate]);

    const SOCIAL_LINK_LIST = [
        {
            link: user.facebook_url,
            icon: 'facebook',
        },
        {
            link: user.youtube_url,
            icon: 'youtube',
        },
        {
            link: user.instagram_url,
            icon: 'instagram',
        },
        {
            link: user.linkedin_url,
            icon: 'linkedin',
        },
        {
            link: user.twitter_url,
            icon: 'twitter',
        },
    ];

    return !isLoading ? (
        <Container style={{ padding: 0 }} className={cx('container', 'grid-container')}>
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
            <div className={cx('wrapper')}>
                <Container style={{ padding: 0, maxWidth: '100%' }}>
                    <Row gutterWidth={24}>
                        <Col sm={12} md={12} lg={12} xl={5}>
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
                                {SOCIAL_LINK_LIST.map((data, i) => (
                                    <SocialLink data={data} key={i} />
                                ))}
                            </Box>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={7}>
                            <Box title="Các bài viết đã đăng">
                                {postsList.length > 0 ? (
                                    postsList.map(post => <PostItem key={post.id} post={post} />)
                                ) : (
                                    <p className={cx('msg')}>Người dùng chưa đăng bài viết nào</p>
                                )}
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    ) : null;
}

export default ProfilePage;
