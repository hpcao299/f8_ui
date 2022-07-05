import MDEditor from '@uiw/react-md-editor';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ContentEditor.module.scss';

const cx = classNames.bind(styles);

function ContentEditor({ title: titleProp = '', value: valueProp = '' }) {
    const [title, setTitle] = useState(titleProp);
    const [value, setValue] = useState(valueProp);

    return (
        <>
            <input
                type="text"
                className={cx('title')}
                placeholder="Tiêu đề"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div className={cx('editor')} data-color-mode="light">
                <MDEditor
                    value={value}
                    onChange={str => setValue(str)}
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
