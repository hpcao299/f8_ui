import { NavLink } from 'react-router-dom';
import config from '~/config';
import styles from './HeadingTabs.module.scss';

function HeadingTabs() {
    return (
        <div>
            <ul className={styles.tabs}>
                <li>
                    <NavLink
                        to={config.routes.myDraftsPost}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Bản nháp
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={config.routes.myPublishedPost}
                        className={({ isActive }) => (isActive ? styles.active : '')}
                    >
                        Đã xuất bản
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default HeadingTabs;
