import MDEditor from '@uiw/react-md-editor';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import ContentEditable from '~/components/ContentEditable';
import config from '~/config';
import { setContent, setTitle, writingBlog } from '~/slices/writeBlogSlice';
import styles from './ContentEditor.module.scss';

const cx = classNames.bind(styles);

function ContentEditor({ title, content, showPrompt, confirmNavigation, cancelNavigation }) {
    const dispatch = useDispatch();

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

    const handleChangeTitle = e => {
        dispatch(setTitle(e.target.value));
        dispatch(writingBlog());
    };

    const handleChangeValue = str => {
        dispatch(setContent(str));
        dispatch(writingBlog());
    };

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
                    textareaProps={{ placeholder: 'Nội dung viết ở đây', spellCheck: true }}
                />
            </div>
        </>
    );
}

ContentEditor.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default ContentEditor;
