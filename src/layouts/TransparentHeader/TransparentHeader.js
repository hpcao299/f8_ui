import PropTypes from 'prop-types';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InteractiveSidebar from '../components/InteractiveSidebar';
import styles from './TransparentHeader.module.scss';

function TransparentHeader({ children }) {
    return (
        <>
            <Header transparent />
            <Container>
                <InteractiveSidebar />
                <div className={styles.content}>{children}</div>
            </Container>
            <Footer />
        </>
    );
}

TransparentHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TransparentHeader;
