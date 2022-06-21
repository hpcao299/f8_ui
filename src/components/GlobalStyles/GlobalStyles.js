import PropTypes from 'prop-types';
import 'tippy.js/animations/shift-away.css';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
