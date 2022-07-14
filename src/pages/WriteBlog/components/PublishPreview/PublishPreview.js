import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-grid-system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import blogApi from '~/api/blogApi';
import Checkbox from '~/components/Checkbox';
import Select from '~/components/Select';
import config from '~/config';
import { messages } from '~/constants';
import { addNotification } from '~/slices/notificationSlice';
import { endApi, runApi, setTopicId } from '~/slices/writeBlogSlice';
import MetaDetailsPreview from './MetaDetailsPreview';
import styles from './PublishPreview.module.scss';

const cx = classNames.bind(styles);

const SELECT_OPTIONS = [
    {
        value: 2,
        title: 'Front-end / Mobile apps',
    },
    {
        value: 3,
        title: 'Back-end / Devops',
    },
    {
        value: 4,
        title: 'UI / UX / Design',
    },
    {
        value: 5,
        title: 'Others',
    },
];

function PublishPreview() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { title, meta_title, meta_description, value, topic_id, status } = useSelector(
        state => state.writeBlog,
    );

    const handleSelectChange = e => {
        dispatch(setTopicId(e.target.value));
    };

    const handlePublish = async () => {
        const newPostDetails = {
            title,
            meta_title,
            meta_description,
            content: value,
            topic_id,
        };

        dispatch(runApi());
        try {
            await blogApi.newPost(newPostDetails);
            dispatch(addNotification(messages.newPostSuccessfully));
            navigate(config.routes.myPost);
        } catch (error) {
            dispatch(addNotification(messages.newPostFailed));
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
                                options={SELECT_OPTIONS}
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
