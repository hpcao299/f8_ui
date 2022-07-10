import { Helmet } from 'react-helmet-async';
import config from '~/config';

function MyPostPage() {
    return (
        <div>
            <Helmet>
                <title>{config.titles.myPost}</title>
            </Helmet>
            MyPostPage
        </div>
    );
}

export default MyPostPage;
