import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from '~/components/ContentEditable';
import { setMetaDesc, setMetaTitle } from '~/slices/writeBlogSlice';
import styles from './PublishPreview.module.scss';

const cx = classNames.bind(styles);

function MetaDetailsPreview() {
    const { meta_title, meta_description } = useSelector(state => state.writeBlog);
    const dispatch = useDispatch();

    const handleMetaTitleChange = e => {
        dispatch(setMetaTitle(e.target.value));
    };

    const handleMetaDescChange = e => {
        dispatch(setMetaDesc(e.target.value));
    };

    return (
        <>
            <ContentEditable
                placeholder="Tiêu đề khi tin được hiển thị"
                className={cx('input', 'title')}
                onChange={handleMetaTitleChange}
                defaultValue={meta_title}
            />
            <ContentEditable
                placeholder="Mô tả khi tin được hiển thị"
                className={cx('input', 'desc')}
                onChange={handleMetaDescChange}
                defaultValue={meta_description}
            />
            <p className={cx('note')}>
                <strong>Lưu ý:</strong> Chỉnh sửa tại đây sẽ thay đổi cách bài viết được hiển thị
                tại trang chủ, tin nổi bật - Chứ không ảnh hưởng tới nội dung bài viết của bạn.
            </p>
        </>
    );
}

export default MetaDetailsPreview;
