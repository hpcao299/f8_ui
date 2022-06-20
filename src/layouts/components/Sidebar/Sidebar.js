import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import CreateButton from '~/components/CreateButton';
import { HomeIcon, LightBulbIcon, NewspaperIcon, RoadIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <CreateButton />
            <ul className={cx('list')}>
                <li>
                    <Link to="/">
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/learning-paths">
                        <RoadIcon />
                        <span>Lộ trình</span>
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <LightBulbIcon />
                        <span>Học</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blog">
                        <NewspaperIcon />
                        <span>Blog</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
