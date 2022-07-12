import MDEditor from '@uiw/react-md-editor';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from '~/components/ContentEditable';
import { setTitle, setValue } from '~/slices/writeBlogSlice';
import styles from './ContentEditor.module.scss';

const cx = classNames.bind(styles);

function ContentEditor({ title: titleProp = '', value: valueProp = '' }) {
    const { value } = useSelector(state => state.writeBlog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle(titleProp));
        dispatch(setValue(valueProp));
    }, [titleProp, valueProp, dispatch]);

    const handleChangeTitle = e => {
        dispatch(setTitle(e.target.value));
    };

    const handleChangeValue = str => {
        dispatch(setValue(str));
    };

    return (
        <>
            <ContentEditable
                placeholder="Tiêu đề"
                onChange={handleChangeTitle}
                className={cx('title')}
            />
            <div className={cx('editor')} data-color-mode="light">
                <MDEditor
                    value={value}
                    onChange={handleChangeValue}
                    height={window.innerHeight - 100}
                    textareaProps={{ placeholder: 'Nội dung viết ở đây', spellCheck: true }}
                />
            </div>
        </>
    );
}

ContentEditor.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
};

export default ContentEditor;
