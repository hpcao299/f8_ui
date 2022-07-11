import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { isSignedIn } = JSON.parse(localStorage.getItem('auth') || '{"isSignedIn": false}');
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) return navigate('/auth/signin');
    }, [isSignedIn, navigate]);

    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
