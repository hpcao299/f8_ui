import PropTypes from 'prop-types';

function NoNav({ children }) {
    return <>{children}</>;
}

NoNav.propTypes = {
    children: PropTypes.node.isRequired,
};

export default NoNav;
