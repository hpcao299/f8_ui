import PropTypes from 'prop-types';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InteractiveSidebar from '../components/InteractiveSidebar';
import styles from './MovableSidebar.module.scss';

function MovableSidebar({ children, ...props }) {
    return (
        <>
            <Header {...props} />
            <Container>
                <InteractiveSidebar />
                <div className={styles.content}>{children}</div>
            </Container>
            <Footer />
        </>
    );
}

MovableSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MovableSidebar;
