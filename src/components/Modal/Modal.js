import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ isShown, className, duration = 200, children }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!isShown) {
            setTimeout(() => {
                setShowModal(false);
            }, duration);
        } else {
            setShowModal(true);
        }
    }, [isShown, duration]);

    return (
        <>
            {showModal && (
                <div
                    style={{
                        animationDuration: `${duration}ms`,
                    }}
                    className={cx('wrapper', className, {
                        fadeIn: showModal,
                        fadeOut: !isShown,
                    })}
                >
                    {children}
                </div>
            )}
        </>
    );
}

Modal.propTypes = {
    isShown: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Modal;
