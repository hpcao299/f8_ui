import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { EllipsisIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './MyPostItem.module.scss';

const cx = classNames.bind(styles);

function OptionsBtn({ data, handleDeletePost }) {
    const [visible, setVisible] = useState(false);

    const handleDeleteBtnClick = e => {
        e.preventDefault();
        handleDeletePost(data.id);
    };

    return (
        <Tippy
            content={
                <PopperWrapper className={cx('menu')}>
                    <ul>
                        <li>
                            <Link to={`/post/${data.id}/edit`}>Chỉnh sửa</Link>
                        </li>
                        <li>
                            <Link to="" onClick={handleDeleteBtnClick}>
                                Xoá
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
            <button className={cx('options')} onClick={() => setVisible(!visible)}>
                <EllipsisIcon />
            </button>
        </Tippy>
    );
}

OptionsBtn.propTypes = {
    data: PropTypes.object.isRequired,
    handleDeletePost: PropTypes.func.isRequired,
};

export default OptionsBtn;
