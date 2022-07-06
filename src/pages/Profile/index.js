import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Box from '~/components/Box';
import { UserGroupIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function ProfilePage() {
    return (
        <Container style={{ padding: '0 20px' }}>
            <div className={cx('cover')} style={{ backgroundImage: `url(${images.coverProfile})` }}>
                <div className={cx('user')}>
                    <div className={cx('user-avatar')}>
                        <Image
                            src="https://instagram.fsgn5-11.fna.fbcdn.net/v/t51.2885-19/288091779_556395209443131_6381403547892234975_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsgn5-11.fna.fbcdn.net&_nc_cat=103&_nc_ohc=hEMhovHhV_IAX-8hsXK&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8CjmmIitpuFeWQcPfRpEcbuq14QqSifJqk4AXNmfggkQ&oe=62CB96CD&_nc_sid=8fd12b"
                            alt="Example name"
                            isAvatar
                        />
                    </div>
                    <div className={cx('username')}>
                        <div>ImNey</div>
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <Container style={{ padding: 0 }}>
                    <Row gutterWidth={24}>
                        <Col sm={12} md={12} lg={5}>
                            <Box title="Giới thiệu">
                                <div className={cx('bio')}>example bio</div>
                                <div className={cx('participate-time')}>
                                    <div className={cx('participate-time-icon')}>
                                        <UserGroupIcon />
                                    </div>
                                    <span>
                                        Thành viên của <strong>F8 - Học lập trình để đi làm</strong>{' '}
                                        từ 10 tháng trước
                                    </span>
                                </div>
                            </Box>
                        </Col>
                        <Col sm={12} md={12} lg={7}>
                            <Box title="Các bài viết đã đăng">
                                {[1, 2, 3, 4, 5].map((a, i) => (
                                    <div key={i} className={cx('post')}>
                                        <Link to="/blog/example">
                                            <div className={cx('thumb')}>
                                                <Image
                                                    src="https://files.fullstack.edu.vn/f8-prod/blog_posts/3930/62b7ef8ce02a3.png"
                                                    alt="Example"
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('info')}>
                                            <Link to="/blog/example">
                                                <h3 className={cx('info-title')}>
                                                    LM Theme | Cách tạo theme VSCode và Publish lên
                                                    Marketplace
                                                </h3>
                                            </Link>
                                            <p className={cx('info-desc')}>
                                                Xin chào các anh chị ở F8, em 2K7 ở đây chắc cũng
                                                không có ai nhỏ hơn nên em xin phép xưng em ạ. Vì
                                                bây giờ đã nghỉ hè rồi nên bắt...
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default ProfilePage;
