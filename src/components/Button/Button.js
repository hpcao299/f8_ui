import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,

    primary = false,
    text = false,
    disabled = false,
    rounded = false,
    fieldButton = false,
    fieldButtonSave = false,
    fieldButtonDefault = false,

    size,

    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listeners when button is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props.key;
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('btn', {
        primary,
        text,
        small: size === 'small',
        large: size === 'large',
        disabled,
        rounded,
        fieldButton: fieldButtonDefault || fieldButtonSave,
        fieldButtonSave,
        fieldButtonDefault,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,

    primary: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    fieldButton: PropTypes.bool,
    fieldButtonSave: PropTypes.bool,
    fieldButtonDefault: PropTypes.bool,

    size: PropTypes.oneOf(['small', 'large']),

    onClick: PropTypes.func,
};

export default Button;
