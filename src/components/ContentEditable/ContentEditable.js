import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import styles from './ContentEditable.module.scss';

const cx = classNames.bind(styles);

function ContentEditable({ className, placeholder, onChange, defaultValue = '', ...props }) {
    const contentEditableRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);

    useEffect(() => {
        contentEditableRef.current.innerText = defaultValueRef.current;
    }, [defaultValueRef]);

    const handleChange = () => {
        const value = contentEditableRef.current.innerText;
        onChange({
            target: {
                value,
            },
        });
    };

    return (
        <div
            ref={contentEditableRef}
            className={cx('wrapper', className)}
            spellCheck="false"
            contentEditable
            placeholder={placeholder}
            onInput={handleChange}
            {...props}
        ></div>
    );
}

ContentEditable.propTypes = {
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default ContentEditable;
