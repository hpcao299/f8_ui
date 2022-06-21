import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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
                <div className={cx('withSidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('withSidebarContent')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </Container>
        </>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
