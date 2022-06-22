import PropTypes from 'prop-types';
import Container from '~/layouts/components/Container';
import Header from '../components/Header';
function HeaderOnly({ children, ...props }) {
    return (
        <div>
            <Header {...props} />
            <Container>{children}</Container>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;
