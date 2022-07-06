import PropTypes from 'prop-types';
import styles from './Box.module.scss';

function Box({ children, title }) {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            <div>{children}</div>
        </div>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

export default Box;
