import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from '~/components/ContentEditable';
import MDEditor from '~/components/MD/MDEditor';
import config from '~/config';
import { setContent, setTitle } from '~/slices/writeBlogSlice';
import styles from './ContentEditor.module.scss';

const cx = classNames.bind(styles);

function ContentEditor({ showPrompt, confirmNavigation, cancelNavigation }) {
    const dispatch = useDispatch();
    const { title, content } = useSelector(state => state.writeBlog);
    const textareaProps = useRef({ placeholder: 'Nội dung viết ở đây', spellCheck: true });

    useEffect(() => {
        if (title) {
            document.title = title;
        } else {
            document.title = config.titles.writeBlog;
        }
    }, [title]);

    useEffect(() => {
        if (showPrompt) {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('You have unsaved changes. Are you sure want to leave this page?')) {
                confirmNavigation();
            } else {
                cancelNavigation();
            }
        }
    }, [cancelNavigation, confirmNavigation, showPrompt]);

    const handleChangeTitle = useCallback(
        e => {
            dispatch(setTitle(e.target.value));
        },
        [dispatch],
    );

    const handleChangeValue = useCallback(
        str => {
            dispatch(setContent(str));
        },
        [dispatch],
    );

    return (
        <>
            <ContentEditable
                placeholder="Tiêu đề"
                onChange={handleChangeTitle}
                className={cx('title')}
                defaultValue={title}
            />
            <div className={cx('editor')} data-color-mode="light">
                <MDEditor
                    value={content}
                    onChange={handleChangeValue}
                    height={window.innerHeight - 100}
                    textareaProps={textareaProps.current}
                />
            </div>
        </>
    );
}

ContentEditor.propTypes = {
    showPrompt: PropTypes.bool.isRequired,
    confirmNavigation: PropTypes.func.isRequired,
    cancelNavigation: PropTypes.func.isRequired,
};

export default ContentEditor;
