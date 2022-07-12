import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isShown, hideModal, children }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isShown) {
            setTimeout(() => {
                setShowModal(false);
            }, 200);
        } else {
            setShowModal(true);
        }
    }, [isShown]);

    return (
        <>
            {showModal && (
                <div
                    className={cx('wrapper', {
                        fadeIn: showModal,
                        fadeOut: !isShown,
                    })}
                >
                    <div className={cx('close')} onClick={hideModal}>
                        x
                    </div>
                    <div className={cx('content')}>{children}</div>
                </div>
            )}
        </>
    );
}

Modal.propTypes = {
    isShown: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
