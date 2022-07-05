import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './SigninButtons.module.scss';

const cx = classNames.bind(styles);

function SigninButtons() {
    const signInWithGoogle = () => {
        console.log('sign in with google');
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
            <div className={cx('button', 'disabled')}>
                <img src={images.github} alt="Github" />
                <span>Tiếp tục với Github</span>
            </div>
        </>
    );
}

export default SigninButtons;
