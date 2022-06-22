import classNames from 'classnames/bind';
import ContentEditor from '~/pages/Blog/components/ContentEditor';
import styles from './WriteBlog.module.scss';

const cx = classNames.bind(styles);

function WriteBlogPage() {
    return (
        <div className={cx('wrapper')}>
            <ContentEditor />
        </div>
    );
}

export default WriteBlogPage;
