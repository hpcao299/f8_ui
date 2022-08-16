import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './Select.module.scss';

function Select({ options, onChange, defaultValue, ...props }) {
    return (
        <select
            {...props}
            className={styles.select}
            onChange={onChange}
            defaultValue={defaultValue}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
}

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
            title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
        }),
    ),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func,
};

export default memo(Select);
