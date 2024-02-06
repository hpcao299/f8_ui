import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link, useParams } from 'react-router-dom';
import topicApi from '~/api/topicApi';
import styles from './TopicsList.module.scss';

const cx = classNames.bind(styles);

function TopicsList({ hideCurrentTopic = false }) {
    const { topicId } = useParams();
    const { data: topics, isLoading } = topicApi.useTopics();

    if (!isLoading) {
        const renderTopics = () => {
            let topicsList = topics.data;

            if (hideCurrentTopic && topicId) {
                topicsList = topicsList?.filter(topic => topic.id !== Number(topicId));
            }

            return topicsList?.map(topic => (
                <li key={topic.id}>
                    <Link to={`/blog/${topic.id}/${topic.slug}`}>{topic.title}</Link>
                </li>
            ));
        };

        return (
            <div className={cx('wrapper')}>
                <>
                    <h3>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
                    <ul className={cx('list')}>{renderTopics()}</ul>
                </>
            </div>
        );
    }
}

TopicsList.propTypes = {
    hideCurrentTopic: PropTypes.bool,
};

export default memo(TopicsList);
