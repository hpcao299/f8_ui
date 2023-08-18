import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { auth } from '~/config/firebase';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        auth.signOut().then(() => {
            navigate(config.routes.signin);
        });
    }, [navigate]);

    return (
        <div>
            <Helmet>
                <title>{config.titles.logout}</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
        </div>
    );
}

export default LogoutPage;
