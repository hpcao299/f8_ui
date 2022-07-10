import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CreateButton from '~/components/CreateButton';
import { HomeIcon, LightBulbIcon, NewspaperIcon, RoadIcon } from '~/components/Icons';
import config from '~/config';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar({ interactive, className }) {
    return (
        <div className={cx('wrapper', { [className]: interactive })}>
            <CreateButton />
            <ul className={cx('list')}>
                <li>
                    <NavLink
                        to={config.routes.home}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        <HomeIcon />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={config.routes.learningPaths}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        <RoadIcon />
                        <span>Lộ trình</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={config.routes.courses}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        <LightBulbIcon />
                        <span>Học</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={config.routes.blog}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        <NewspaperIcon />
                        <span>Blog</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

Sidebar.propTypes = {
    interactive: PropTypes.bool,
    className: PropTypes.string,
};

export default Sidebar;
