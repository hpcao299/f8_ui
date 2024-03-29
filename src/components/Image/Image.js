import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.fallbackImage,
            isAvatar = false,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            if (isAvatar) {
                setFallback(images.fallbackAvatar);
            } else {
                setFallback(customFallback);
            }
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={src ? fallback || src : fallback}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    isAvatar: PropTypes.bool,
    fallback: PropTypes.string,
};

export default Image;
