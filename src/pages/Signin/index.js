import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import Image from '~/components/Image';
import config from '~/config';
import SigninButtons from './components/SigninButtons';
import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function SigninPage() {
    const { currentUser } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) navigate(config.routes.blog);
    }, [currentUser, navigate]);

    return (
        <div
            className={cx('signin')}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${images.bgAuth})`,
            }}
        >
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Link to="/blog">
                            <Image src={images.logo} alt="F8 Logo" className={cx('logo')} />
                        </Link>
                        <h1 className={cx('title')}>Đăng nhập vào F8</h1>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('step')}>
                            <SigninButtons />
                        </div>
                    </div>
                </div>
                <div className={cx('about')}>
                    <a href="https://fullstack.edu.vn/about-us" rel="noreferrer" target="_blank">
                        Giới thiệu về F8
                    </a>
                    <span>|</span>
                    <a
                        href="https://www.youtube.com/c/F8VNOfficial/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        F8 trên Youtube
                    </a>
                    <span>|</span>
                    <a
                        href="https://www.facebook.com/groups/f8official/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        F8 trên Facebook
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
