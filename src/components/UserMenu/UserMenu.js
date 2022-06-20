import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { animated, easings, useSpring } from 'react-spring';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);

function UserMenu({ children, items }) {
    const initialStyles = { opacity: 0, transform: 'translateY(-8px)' };
    const [props, setSpring] = useSpring(() => ({
        config: { duration: 300, easing: easings.easeInExpo },
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

    const renderItems = () => {
        return items.map((item, index) => (
            <Fragment key={index}>
                <li>
                    <Link to={item.to}>{item.title}</Link>
                </li>
                {item.separate && <hr />}
            </Fragment>
        ));
    };

    return (
        <Tippy
            interactive
            trigger="click"
            placement="bottom-end"
            render={attrs => (
                <animated.div {...attrs} tabIndex={-1} style={props}>
                    <PopperWrapper className={cx('wrapper')}>
                        <div className={cx('user')}>
                            <img
                                className={cx('avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/85245/6242eb3973495.jpg"
                                alt="User"
                            />
                            <div className={cx('info')}>
                                <div className={cx('name')}>Nguyen Van A</div>
                                <div className={cx('username')}>@nguyenvana</div>
                            </div>
                        </div>
                        <hr />
                        <ul className={cx('list')}>{renderItems()}</ul>
                    </PopperWrapper>
                </animated.div>
            )}
            onMount={onMount}
            onHide={onHide}
        >
            {children}
        </Tippy>
    );
}

export default UserMenu;
