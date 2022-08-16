import classNames from 'classnames/bind';
import { memo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from '~/components/ContentEditable';
import { setMetaDesc, setMetaTitle } from '~/slices/writeBlogSlice';
import styles from './PublishPreview.module.scss';

const cx = classNames.bind(styles);

function MetaDetailsPreview() {
    const { meta_title, meta_description } = useSelector(state => state.writeBlog);
    const dispatch = useDispatch();

    const metaTitleDefault = useRef(meta_title);
    const metaDescDefault = useRef(meta_description);

    const handleMetaTitleChange = useCallback(
        e => {
            dispatch(setMetaTitle(e.target.value));
        },
        [dispatch],
    );

    const handleMetaDescChange = useCallback(
        e => {
            dispatch(setMetaDesc(e.target.value));
        },
        [dispatch],
    );

    return (
        <>
            <ContentEditable
                placeholder="Tiêu đề khi tin được hiển thị"
                className={cx('input', 'title')}
                onChange={handleMetaTitleChange}
                defaultValue={metaTitleDefault.current}
            />
            <ContentEditable
                placeholder="Mô tả khi tin được hiển thị"
                className={cx('input', 'desc')}
                onChange={handleMetaDescChange}
                defaultValue={metaDescDefault.current}
            />
            <p className={cx('note')}>
                <strong>Lưu ý:</strong> Chỉnh sửa tại đây sẽ thay đổi cách bài viết được hiển thị
                tại trang chủ, tin nổi bật - Chứ không ảnh hưởng tới nội dung bài viết của bạn.
            </p>
        </>
    );
}

export default memo(MetaDetailsPreview);
