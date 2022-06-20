import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PenIcon, PlusIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './CreateButton.module.scss';

const cx = classNames.bind(styles);

function CreateButton() {
    const [visible, setVisible] = useState(false);

    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
        <div>
            <Tippy
                content={
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
                }
                interactive
                animation="shift-away"
                placement="bottom-end"
                visible={visible}
                onClickOutside={() => setVisible(false)}
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
