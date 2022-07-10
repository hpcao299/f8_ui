import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import firebase from '~/config/firebase';
import styles from './SigninButtons.module.scss';

const cx = classNames.bind(styles);

function SigninButtons() {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithRedirect(provider)
            .then(() => {
                navigate(config.routes.blog);
            });
    };

    const signInWithGithub = () => {
        const provider = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithRedirect(provider)
            .then(() => {
                navigate(config.routes.blog);
            });
    };

    return (
        <>
            <div className={cx('button', 'disabled')}>
                <img src={images.personal} alt="Personal" />
                <span>Sử dụng email / số điện thoại</span>
            </div>
            <div className={cx('button')} onClick={signInWithGoogle}>
                <img src={images.google} alt="Google" />
                <span>Tiếp tục với Google</span>
            </div>
            <div className={cx('button', 'disabled')}>
                <img src={images.facebook} alt="Facebook" />
                <span>Tiếp tục với Facebook</span>
            </div>
            <div className={cx('button')} onClick={signInWithGithub}>
                <img src={images.github} alt="Github" />
                <span>Tiếp tục với Github</span>
            </div>
        </>
    );
}

export default SigninButtons;
