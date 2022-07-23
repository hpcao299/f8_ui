import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

function PrivateRoute({ children }) {
    const { isSignedIn } = JSON.parse(localStorage.getItem('auth') || '{"isSignedIn": false}');
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) return navigate(config.routes.signin);
    }, [isSignedIn, navigate]);

    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
