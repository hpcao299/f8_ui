import classNames from 'classnames/bind';
import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import config from '~/config';
import { content } from '~/constants';
import { selectCurrentTopic } from '~/slices/topicSlice';
import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

function BlogTitle() {
    const { topicId } = useParams();
    const selectedTopic = useSelector(state => selectCurrentTopic(state, Number(topicId)));

    const renderTitle = () => {
        if (selectedTopic) {
            return `${selectedTopic.title} ${config.titles.shortTag}`;
        }

        return config.titles.newestBlog;
    };

    const renderHeading = () => {
        if (selectedTopic) {
            return selectedTopic.title;
        }

        return content.newPostsTitle;
    };

    const renderDesc = () => {
        if (selectedTopic) {
            return `${content.postsTopicDesc} ${selectedTopic.title}`;
        }

        return content.newPostsDesc;
    };

    return (
        <div className={cx('top')}>
            <Helmet>
                <title>{renderTitle()}</title>
                <meta name="description" content={renderDesc()} />
                <link rel="canonical" href={window.location.href} />

                <meta name="og:title" content={renderTitle()} />
                <meta name="og:description" content={renderDesc()} />
                <meta name="og:url" content={window.location.href} />
            </Helmet>

            <h1 className={cx('heading')}>{renderHeading()}</h1>
            <p className={cx('desc')}>{renderDesc()}</p>
        </div>
    );
}

export default memo(BlogTitle);
