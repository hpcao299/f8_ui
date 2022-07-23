import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { FacebookIcon, TikTokIcon, YoutubeIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <Container style={{ padding: 0 }} className={cx('container')}>
                <Row gutterWidth={24}>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className={cx('column')}>
                            <div>
                                <div className={cx('logo')}>
                                    <Link to="/blog">
                                        <Image src={images.logo} alt="F8 Logo" />
                                    </Link>
                                    <h4 className={cx('logo-heading')}>Học Lập Trình Để Đi Làm</h4>
                                </div>
                                <ul className={cx('list')}>
                                    <li>
                                        Điện thoại: <a href="tel:0246.329.1102">0246.329.1102</a>
                                    </li>
                                    <li>
                                        Email:{' '}
                                        <a href="mailto:contact@fullstack.edu.vn">
                                            contact@fullstack.edu.vn
                                        </a>
                                    </li>
                                    <li>
                                        Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy,
                                        Hà Nội
                                    </li>
                                    <li>
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            title="DMCA Protected"
                                            href="https://www.dmca.com/Protection/Status.aspx?id=1b325c69-aeb7-4e32-8784-a0009613323a&refurl=https%3a%2f%2ffullstack.edu.vn%2f&rlo=true"
                                        >
                                            <Image
                                                className={cx('dmca')}
                                                src={images.dmca}
                                                alt="DMCA Protected"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className={cx('column')}>
                            <div>
                                <h3 className={cx('heading')}>Về F8</h3>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/blog">Giới thiệu</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Cơ hội việc làm</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Đối tác</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className={cx('column')}>
                            <div>
                                <h3 className={cx('heading')}>Hỗ trợ</h3>
                                <ul className={cx('list')}>
                                    <li>
                                        <Link to="/blog">Liên hệ</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Bảo mật</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Điều khoản</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} xl={3}>
                        <div className={cx('column')}>
                            <div>
                                <h3 className={cx('heading')}>
                                    CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                                </h3>
                                <ul className={cx('list')}>
                                    <li>Mã số thuế: 0109922901</li>
                                    <li>Ngày thành lập: 04/03/2022</li>
                                    <li>
                                        Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và
                                        phát triển những sản phẩm mạng lại giá trị cho cộng đồng.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className={cx('bottom')}>
                    <p className={cx('copyright')}>
                        © 2022 F8 - Nền tảng học lập trình số 1 Việt Nam
                    </p>
                    <div className={cx('social-list')}>
                        <a
                            href="https://www.youtube.com/c/F8VNOfficial/"
                            target="_blank"
                            rel="noreferrer"
                            className={cx('social-item', 'youtube-icon')}
                        >
                            <YoutubeIcon />
                        </a>
                        <a
                            href="https://www.facebook.com/groups/f8official/"
                            target="_blank"
                            rel="noreferrer"
                            className={cx('social-item', 'facebook-icon')}
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.tiktok.com/@f8official"
                            target="_blank"
                            rel="noreferrer"
                            className={cx('social-item', 'tiktok-icon')}
                        >
                            <TikTokIcon />
                        </a>
                    </div>
                </div>

                <div className={cx('space')}></div>
            </Container>
        </footer>
    );
}

export default Footer;
