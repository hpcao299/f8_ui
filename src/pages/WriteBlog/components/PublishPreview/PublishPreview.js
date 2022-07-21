import classNames from 'classnames/bind';
import { useEffect } from 'react';
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

function PublishPreview() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { topics } = useSelector(state => state.topic);
    const { status, meta_title, meta_description } = useSelector(state => state.writeBlog);
    const { blogId } = useParams();

    useEffect(() => {
        dispatch(fetchTopics());
    }, [dispatch]);

    const handleSelectChange = e => {
        const topicId = e.target.value;
        dispatch(setTopicId(topicId));
        dispatch(selectPostTopic({ blogId, data: { id: topicId } }));
    };

    const getTopicOptions = () => topics.map(topic => ({ value: topic.id, title: topic.title }));

    const handlePublish = async () => {
        dispatch(runApi());
        try {
            await blogApi.publishPost({ id: blogId, meta_title, meta_description });
            dispatch(addNotification(messages.publishPostSuccessfully));
            navigate(config.routes.myPublishedPost);
        } catch (error) {
            dispatch(addNotification(messages.publishPostFailed));
            console.log(error);
        }
        dispatch(endApi());
    };

    return (
        <Container style={{ maxWidth: 1224 }}>
            <Row gutterWidth={24}>
                <Col sm={12} md={12} lg={6}>
                    <div className={cx('leftLayout')}>
                        <h3>Xem trước</h3>
                        <div className={cx('img')}>
                            <label htmlFor="thumb"></label>
                            <input type="file" accept="image/*" hidden id="thumb" />
                            <p>
                                Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút hơn
                                với độc giả.
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
                                options={getTopicOptions()}
                                onChange={handleSelectChange}
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
                                Xuất bản ngay
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PublishPreview;
