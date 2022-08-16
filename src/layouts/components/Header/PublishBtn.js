import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { showPublishPreview } from '~/slices/writeBlogSlice';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function PublishBtn() {
    const { title, content } = useSelector(state => state.writeBlog);
    const { blogId } = useParams();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showPublishPreview());
    };

    return (
        <Button
            className={cx('publishBtn')}
            onClick={handleClick}
            primary
            disabled={!title || !content}
        >
            {blogId ? 'Chỉnh sửa' : 'Xuất bản'}
        </Button>
    );
}

export default PublishBtn;
