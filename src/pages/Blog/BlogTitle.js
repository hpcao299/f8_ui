import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import config from '~/config';
import { content } from '~/constants';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function BlogTitle() {
    const { topicId } = useParams();
    const selectedTopic = useRef(null);
    const { topics } = useSelector(state => state.topic);

    useEffect(() => {
        if (topicId) {
            const topic = topics.find(topic => topic.id === Number(topicId));
            selectedTopic.current = topic;
            return;
        }

        selectedTopic.current = null;
    }, [topicId, topics]);

    const renderTitle = () => {
        if (selectedTopic.current) {
            return `${selectedTopic.current.title} ${config.titles.shortTag}`;
        }

        return config.titles.newestBlog;
    };

    const renderHeading = () => {
        if (selectedTopic.current) {
            return selectedTopic.current.title;
        }

        return content.newPostsTitle;
    };

    const renderDesc = () => {
        if (selectedTopic.current) {
            return `${content.postsTopicDesc} ${selectedTopic.current.title}`;
        }

        return content.newPostsDesc;
    };

    return (
        <div className={cx('top')}>
            <Helmet>
                <title>{renderTitle()}</title>
            </Helmet>

            <h1 className={cx('heading')}>{renderHeading()}</h1>
            <p className={cx('desc')}>{renderDesc()}</p>
        </div>
    );
}

export default BlogTitle;
