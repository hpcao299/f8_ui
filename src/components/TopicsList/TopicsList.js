import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchTopics } from '~/slices/topicSlice';
import styles from './TopicsList.module.scss';

const cx = classNames.bind(styles);

function TopicsList({ hideCurrentTopic = false }) {
    const { topics } = useSelector(state => state.topic);
    const dispatch = useDispatch();
    const { topicId } = useParams();

    useEffect(() => {
        dispatch(fetchTopics());
    }, [dispatch]);

    const renderTopics = () => {
        let topicsList = topics;
        if (hideCurrentTopic && topicId) {
            topicsList = topicsList.filter(topic => topic.id !== Number(topicId));
        }

        return topicsList.map(topic => (
            <li key={topic.id}>
                <Link to={`/blog/${topic.id}/${topic.slug}`}>{topic.title}</Link>
            </li>
        ));
    };

    return (
        <div className={cx('wrapper')}>
            {topics.length > 0 && (
                <>
                    <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
                    <ul className={cx('list')}>{renderTopics()}</ul>
                </>
            )}
        </div>
    );
}

TopicsList.propTypes = {
    hideCurrentTopic: PropTypes.bool,
};

export default memo(TopicsList);
