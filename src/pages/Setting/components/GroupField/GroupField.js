import PropTypes from 'prop-types';
import styles from './GroupField.module.scss';

function GroupField({ children, heading }) {
    return (
        <div className={styles.wrapper}>
            {heading && <h2 className={styles.heading}>{heading}</h2>}
            {children}
        </div>
    );
}

GroupField.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string,
};

export default GroupField;
