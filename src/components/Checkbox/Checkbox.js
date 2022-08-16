import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { CheckIcon } from '../Icons';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

function Checkbox({ text }) {
    const [checked, setChecked] = useState(true);

    const handleLabelClick = () => {
        setChecked(!checked);
    };

    return (
        <label htmlFor="checkbox" className={cx('label')} onClick={handleLabelClick}>
            <input
                type="checkbox"
                id="checkbox"
                defaultChecked={checked}
                hidden
                className={cx('input')}
            />
            <div className={cx('box')}>
                <CheckIcon className={cx('tick')} />
            </div>
            <span className={cx('text')}>{text}</span>
        </label>
    );
}

Checkbox.propTypes = {
    text: PropTypes.string,
};

export default memo(Checkbox);
