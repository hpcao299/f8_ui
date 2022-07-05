import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import FieldButtons from '../FieldButtons';
import styles from './PhotoField.module.scss';

const cx = classNames.bind(styles);

function PhotoField({ data, isEditable }) {
    const [isEdit, setIsEdit] = useState(false);

    const handleCancel = () => {
        setIsEdit(false);
    };

    const handleSubmit = () => {
        console.log('value');
    };

    return (
        <>
            <div className={cx('content')}>
                <h3 className={cx('content-label')}>{data.name}</h3>

                <div className={cx('content-edit')}>
                    <div className={cx('content-body')}>{data.desc}</div>
                    <div className={cx('content-image')}>
                        <input type="file" accept="image/*" id="avatar" hidden />

                        <div className={cx('avatar-wrapper')}>
                            <img
                                src={data.value}
                                alt=""
                                className={cx('avatar')}
                                onClick={() => setIsEdit(true)}
                            />

                            <label
                                htmlFor="avatar"
                                className={cx({
                                    'choose-avatar': isEdit,
                                })}
                            >
                                {isEdit && <FaCamera />}
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {isEditable && (
                <FieldButtons
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    handleCancel={handleCancel}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    );
}

PhotoField.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        desc: PropTypes.string,
    }),
    isEditable: PropTypes.bool,
};

export default PhotoField;
