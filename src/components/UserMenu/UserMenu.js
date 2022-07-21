import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);

function UserMenu({ items }) {
    const [visible, setVisible] = useState(false);
    const { currentUser } = useSelector(state => state.auth);

    const renderItems = () => {
        return items.map((item, index) => {
            const handleItemClick = () => {
                if (typeof item.onClick === 'function') {
                    item.onClick();
                }
                setVisible(false);
            };

            return (
                <Fragment key={index}>
                    <li>
                        <Link
                            to={item.to ? item.to : ''}
                            className={cx({
                                disabled: item.disabled,
                            })}
                            onClick={handleItemClick}
                        >
                            {item.title}
                        </Link>
                    </li>
                    {item.separate && <hr />}
                </Fragment>
            );
        });
    };

    return (
        <Tippy
            content={
                <PopperWrapper className={cx('wrapper')}>
                    <div className={cx('user')}>
                        <Image isAvatar src={currentUser.avatar_url} alt={currentUser.full_name} />
                        <div className={cx('info')}>
                            <div className={cx('name')}>{currentUser.full_name}</div>
                            <div className={cx('username')}>{currentUser.username}</div>
                        </div>
                    </div>
                    <hr />
                    <ul className={cx('list')}>{renderItems()}</ul>
                </PopperWrapper>
            }
            interactive
            animation="shift-away"
            placement="bottom-end"
            visible={visible}
            onClickOutside={() => setVisible(false)}
        >
            <Image
                isAvatar
                className={cx('avatar')}
                src={currentUser.avatar_url}
                alt={currentUser.username}
                onClick={() => setVisible(!visible)}
            />
        </Tippy>
    );
}

UserMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string,
            title: PropTypes.string.isRequired,
            separate: PropTypes.bool,
            onClick: PropTypes.func,
        }),
    ),
};

export default UserMenu;
