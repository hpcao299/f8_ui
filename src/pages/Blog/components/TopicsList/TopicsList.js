import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './TopicsList.module.scss';

const cx = classNames.bind(styles);

const TOPICS_LIST = [
    {
        title: 'Front-end / Mobile apps',
        to: '/blog/topic/front-end-mobile-apps',
    },
    {
        title: 'Back-end / Devops',
        to: '/blog/topic/back-end-devops',
    },
    {
        title: 'UI / UX / Design',
        to: '/blog/topic/ui-ux-design',
    },
    {
        title: 'Others',
        to: '/blog/topic/others',
    },
];

function TopicsList() {
    return (
        <div className={cx('wrapper')}>
            <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
            <ul className={cx('list')}>
                {TOPICS_LIST.map((topic, index) => (
                    <li key={index}>
                        <Link to={topic.to}>{topic.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopicsList;
