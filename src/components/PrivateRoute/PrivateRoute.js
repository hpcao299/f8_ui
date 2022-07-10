import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { currentUser } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) navigate('/a/signin');
    }, [currentUser, navigate]);

    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
