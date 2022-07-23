import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import FieldButtons from '../FieldButtons';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

function InputField({ data, isEditable, handleSubmit, inputProps }) {
    const [isEdit, setIsEdit] = useState(false);
    const [inputValue, setInputValue] = useState(data.value);
    const inputRef = useRef();

    useEffect(() => {
        if (isEdit) {
            inputRef.current?.focus();
        }
    }, [isEdit]);

    const handleCancel = () => {
        setIsEdit(false);
        setInputValue(data.value);
    };

    const handleButtonSubmitClick = () => {
        setIsEdit(false);
        if (inputValue === '') return handleCancel();
        if (inputValue !== data.value && handleSubmit && inputProps?.name)
            handleSubmit({ [inputProps.name]: inputValue });
    };

    return (
        <>
            <div className={cx('content')}>
                <h3 className={cx('content-label')}>{data.name}</h3>

                <div className={cx('content-edit')}>
                    <input
                        ref={inputRef}
                        className={cx('input')}
                        {...inputProps}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        disabled={!isEdit}
                    />
                    {data.desc && <p className={cx('description')}>{data.desc}</p>}
                </div>
            </div>

            {isEditable && (
                <div className={cx('fieldBtns')}>
                    <FieldButtons
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        handleCancel={handleCancel}
                        handleSubmit={handleButtonSubmitClick}
                    />
                </div>
            )}
        </>
    );
}

InputField.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        desc: PropTypes.string,
    }),
    isEditable: PropTypes.bool,
    handleSubmit: PropTypes.func,
    inputProps: PropTypes.object,
};

export default InputField;
