import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import blogApi from '~/api/blogApi';
import Checkbox from '~/components/Checkbox';
import Select from '~/components/Select';
import config from '~/config';
import { messages } from '~/constants';
import { addNotification } from '~/slices/notificationSlice';
import { fetchTopics } from '~/slices/topicSlice';
import { endApi, runApi, selectPostTopic, setTopicId } from '~/slices/writeBlogSlice';
import MetaDetailsPreview from './MetaDetailsPreview';
import styles from './PublishPreview.module.scss';

const cx = classNames.bind(styles);

function PublishPreview({ hideModal }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { topics } = useSelector(state => state.topic);
    const { status, meta_title, meta_description, topic_id } = useSelector(
        state => state.writeBlog,
    );
    const { blogId } = useParams();

    useEffect(() => {
        dispatch(fetchTopics());
    }, [dispatch]);

    const handleSelectChange = useCallback(
        e => {
            const topicId = e.target.value;
            dispatch(setTopicId(topicId));
            dispatch(selectPostTopic({ blogId, data: { id: topicId } }));
        },
        [dispatch, blogId],
    );

    const topicOptions = useMemo(
        () => topics.map(topic => ({ value: topic.id, title: topic.title })),
        [topics],
    );

    const handlePublish = async () => {
        dispatch(runApi());
        try {
            await blogApi.publishPost({ id: blogId, meta_title, meta_description });
            dispatch(addNotification(messages.publishPostSuccessfully));
            navigate(config.routes.myPublishedPost);
        } catch (error) {
            dispatch(addNotification(messages.publishPostFailed));
            console.error(error);
        }
        dispatch(endApi());
    };

    return (
        <div className={cx('content')}>
            <div className={cx('close')} onClick={hideModal}>
                x
            </div>

            <Container style={{ maxWidth: 1224 }}>
                <Row gutterWidth={24}>
                    <Col sm={12} md={12} lg={6}>
                        <div className={cx('leftLayout')}>
                            <h3>Xem trước</h3>
                            <div className={cx('img')}>
                                <label htmlFor="thumb"></label>
                                <input type="file" accept="image/*" hidden id="thumb" />
                                <p>
                                    Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút
                                    hơn với độc giả.
                                </p>
                                <div>Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh</div>
                            </div>
                            <MetaDetailsPreview />
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div className={cx('rightLayout')}>
                            <div>
                                <p>Chọn đề tài để độc giả biết bài viết của bạn nói về điều gì</p>
                                <Select
                                    name="topics"
                                    options={topicOptions}
                                    onChange={handleSelectChange}
                                    defaultValue={topic_id}
                                />
                            </div>
                            <div className={cx('allowRecommend')}>
                                <Checkbox text="Đề xuất bài viết của bạn đến các độc giả quan tâm tới nội dung này." />
                            </div>
                            <div className={cx('actions')}>
                                <button
                                    className={cx('publishBtn', {
                                        disabled: status === 'loading',
                                    })}
                                    onClick={handlePublish}
                                >
                                    {blogId ? 'Chỉnh sửa' : 'Xuất bản ngay'}
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

PublishPreview.propTypes = {
    hideModal: PropTypes.func.isRequired,
};

export default memo(PublishPreview);
