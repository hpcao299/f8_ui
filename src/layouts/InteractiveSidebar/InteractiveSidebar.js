import PropTypes from 'prop-types';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './InteractiveSidebar.module.scss';

function InteractiveSidebar({ children }) {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.wrapper}>
                    <Sidebar interactive className={styles.sidebar} />
                </div>
                <div className={styles.content}>{children}</div>
            </Container>
            <Footer />
        </>
    );
}

InteractiveSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InteractiveSidebar;
