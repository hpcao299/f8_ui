import classNames from 'classnames/bind';
import { FaBars } from 'react-icons/fa';
import styles from './MobileMenu.module.scss';

const cx = classNames.bind(styles);

function MobileMenu() {
    return (
        <div className={cx('wrapper', 'd-flex', 'al-center')}>
            <FaBars />
        </div>
    );
}

export default MobileMenu;
