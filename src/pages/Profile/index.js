import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import { useNavigate, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import userApi from '~/api/userApi';
import images from '~/assets/images';
import Box from '~/components/Box';
import { UserGroupIcon } from '~/components/Icons';
import Image from '~/components/Image';
import config from '~/config';
import { momentFromNow } from '~/utils';
import PostItem from './PostItem';
import styles from './Profile.module.scss';
import SocialLink from './components/SocialLink';

const cx = classNames.bind(styles);

function ProfilePage() {
    const { id } = useParams();
    const { data, isLoading, error } = userApi.useProfileDetails(id);
    const postsList = data?.data.posts || [];
    const user = data?.data.user || {};
    const navigate = useNavigate();

    if (error) navigate(config.routes.notFound);

    if (isLoading) return null;

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

    return (
        <Container style={{ padding: 0 }} className={cx('container', 'grid-container')}>
            <Helmet>
                <title>{user.full_name}</title>
                <meta name="description" content={config.descs.profile} />
                <link rel="canonical" href={window.location.href} />

                <meta name="og:title" content={user.full_name} />
                <meta name="og:description" content={config.descs.profile} />
                <meta name="og:url" content={window.location.href} />
            </Helmet>

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
    );
}

export default ProfilePage;
