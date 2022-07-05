import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);

function UserMenu({ items }) {
    const [visible, setVisible] = useState(false);

    const renderItems = () => {
        return items.map((item, index) => (
            <Fragment key={index}>
                <li>
                    <Link
                        to={item.to}
                        className={cx({
                            disabled: item.disabled,
                        })}
                    >
                        {item.title}
                    </Link>
                </li>
                {item.separate && <hr />}
            </Fragment>
        ));
    };

    return (
        <Tippy
            content={
                <PopperWrapper className={cx('wrapper')}>
                    <div className={cx('user')}>
                        <Image
                            isAvatar
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
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wQ3lSAWT3t4AX_gM_jD&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9GK_DHDcW9whNIK9UPeOPy935zP7RIYScbSh4Xmk-zDA&oe=62D65578"
                alt="Avatar"
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
        }),
    ),
};

export default UserMenu;
