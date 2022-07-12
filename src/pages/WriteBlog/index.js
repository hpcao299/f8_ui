import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '~/components/Modal';
import config from '~/config';
import { hidePublishPreview } from '~/slices/writeBlogSlice';
import ContentEditor from './components/ContentEditor';
import PublishPreview from './components/PublishPreview';
import styles from './WriteBlog.module.scss';

const cx = classNames.bind(styles);

function WriteBlogPage() {
    const { isShownPublishPreview } = useSelector(state => state.writeBlog);
    const dispatch = useDispatch();

    const handleHideModal = () => {
        dispatch(hidePublishPreview());
    };

    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>{config.titles.writeBlog}</title>
            </Helmet>

            <ContentEditor />

            <Modal isShown={isShownPublishPreview} hideModal={handleHideModal}>
                <PublishPreview />
            </Modal>
        </div>
    );
}

export default WriteBlogPage;
