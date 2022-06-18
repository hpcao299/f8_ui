import classNames from 'classnames/bind';
import Container from '../components/Container';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Container>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </Container>
        </>
    );
}

export default DefaultLayout;
