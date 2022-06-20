import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, easings, useSpring } from 'react-spring';
import { PenIcon, PlusIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './CreateButton.module.scss';

const cx = classNames.bind(styles);

function CreateButton() {
    const [visible, setVisible] = useState(false);
    const initialStyles = { opacity: 0, transform: 'translateY(-8px)' };
    const [props, setSpring] = useSpring(() => ({
        config: { duration: 180, easing: easings.ease },
        ...initialStyles,
    }));

    const onMount = () => {
        setSpring({
            opacity: 1,
            transform: 'translateY(0)',
            onRest: () => {},
        });
    };

    const onHide = ({ unmount }) => {
        setSpring({
            ...initialStyles,
            onRest: unmount,
            config: { clamp: true },
        });
    };

    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={visible}
                placement="bottom-start"
                render={attrs => (
                    <animated.div tabIndex={-1} style={props} {...attrs}>
                        <PopperWrapper className={cx('menu')}>
                            <ul className={cx('list')}>
                                <li>
                                    <Link to="/new-post">
                                        <PenIcon />
                                        <span>Viết blog</span>
                                    </Link>
                                </li>
                            </ul>
                        </PopperWrapper>
                    </animated.div>
                )}
                onShow={() => setVisible(true)}
                onClickOutside={() => setVisible(false)}
                onHide={onHide}
                onMount={onMount}
            >
                <button
                    className={cx('wrapper', { open: visible })}
                    onClick={() => setVisible(!visible)}
                >
                    <PlusIcon className={cx('icon')} />
                </button>
            </Tippy>
        </div>
    );
}

export default CreateButton;
