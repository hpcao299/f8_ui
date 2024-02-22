import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Result = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div className={cx('result-wrapper')}>
            <Tippy
                content={
                    <div className={cx('result')}>
                        <div className={cx('header')}>
                            <span>Kết quả cho 'react'</span>
                        </div>
                    </div>
                }
                interactive
                animation="shift-away"
                placement="bottom-end"
                visible={visible}
                onClickOutside={() => setVisible(false)}
            >
                <div></div>
            </Tippy>
        </div>
    );
};

export default Result;
