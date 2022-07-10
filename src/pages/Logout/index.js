import { Helmet } from 'react-helmet-async';
import config from '~/config';

function LogoutPage() {
    return (
        <div>
            <Helmet>
                <title>{config.titles.logout}</title>
            </Helmet>
        </div>
    );
}

export default LogoutPage;
