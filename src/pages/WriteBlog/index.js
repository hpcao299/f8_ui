import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet-async';
import config from '~/config';
import ContentEditor from '~/pages/Blog/components/ContentEditor';
import styles from './WriteBlog.module.scss';

const cx = classNames.bind(styles);

function WriteBlogPage() {
    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>{config.titles.writeBlog}</title>
            </Helmet>

            <ContentEditor />
        </div>
    );
}

export default WriteBlogPage;
