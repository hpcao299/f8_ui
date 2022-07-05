import PropTypes from 'prop-types';
import Container from '~/layouts/components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
function HeaderOnly({ children, ...props }) {
    return (
        <div>
            <Header {...props} />
            <Container>{children}</Container>
            <Footer />
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
