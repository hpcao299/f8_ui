import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import Modal from '~/components/Modal';
import config from '~/config';
import { useCallbackPrompt } from '~/hooks/useCallbackPrompt';
import {
    editPost,
    fetchPostForEdit,
    hidePublishPreview,
    newPost,
    resetAll,
} from '~/slices/writeBlogSlice';
import ContentEditor from './components/ContentEditor';
import PublishPreview from './components/PublishPreview';
import styles from './WriteBlog.module.scss';

const cx = classNames.bind(styles);

function WriteBlogPage() {
    const navigate = useNavigate();
    const { title, content, meta_title, meta_description, status, isShownPublishPreview } =
        useSelector(state => state.writeBlog);
    const [debouncedTitle] = useDebounce(title, 2500);
    const [debouncedContent] = useDebounce(content, 2500);
    const dispatch = useDispatch();
    const { blogId } = useParams();

    // state for callback prompt when user is writing blog
    // but app hasn't submit edited content yet
    // because of the debounced time
    const [showDialog, setShowDialog] = useState(false);
    const [showPrompt, confirmNavigation, cancelNavigation] = useCallbackPrompt(showDialog);

    useEffect(() => {
        // If users write blog on page /post/:blogId/edit
        // fetch their posts details
        if (blogId) {
            dispatch(fetchPostForEdit(blogId));
        }

        return () => {
            dispatch(resetAll());
        };
    }, [blogId, dispatch]);

    useEffect(() => {
        if (status === 'writing') {
            setShowDialog(true);
        } else if (status === 'failed') {
            navigate(config.routes.notFound);
        } else {
            setShowDialog(false);
        }
    }, [status, navigate]);

    useEffect(() => {
        const newPostOnSuccess = blog_id => {
            navigate(`/post/${blog_id}/edit`, { replace: true });
        };

        if (debouncedContent || debouncedTitle) {
            const postData = { title, content, meta_title, meta_description };

            // If users write blog on page /post/:blogId/edit
            // users are editing their posts
            if (blogId) {
                dispatch(editPost({ blogId, data: postData }));
            } else {
                setShowDialog(false);
                dispatch(newPost({ data: postData, handleSuccess: newPostOnSuccess }));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedTitle, debouncedContent]);

    const handleHideModal = () => {
        dispatch(hidePublishPreview());
    };

    return (
        <div className={cx('wrapper')}>
            <Helmet>
                <title>{config.titles.writeBlog}</title>
                <meta name="description" content={config.descs.writeBlog} />
                <link rel="canonical" href={window.location.href} />

                <meta name="og:title" content={config.titles.writeBlog} />
                <meta name="og:description" content={config.descs.writeBlog} />
                <meta name="og:url" content={window.location.href} />
            </Helmet>

            {status !== 'loading' && (
                <ContentEditor
                    showPrompt={showPrompt}
                    confirmNavigation={confirmNavigation}
                    cancelNavigation={cancelNavigation}
                />
            )}

            <Modal isShown={isShownPublishPreview} className={cx('modal')}>
                <PublishPreview hideModal={handleHideModal} />
            </Modal>
        </div>
    );
}

export default WriteBlogPage;
