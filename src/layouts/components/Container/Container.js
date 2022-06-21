import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const cx = classNames.bind(styles);

function Container({ children }) {
    return <div className={cx('container')}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node,
};

export default Container;
