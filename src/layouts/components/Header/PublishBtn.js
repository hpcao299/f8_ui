import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function PublishBtn() {
    const { title, value } = useSelector(state => state.writeBlog);

    const handlePublish = () => {
        console.log('click publish');
    };

    return (
        <Button
            className={cx('publishBtn')}
            onClick={handlePublish}
            primary
            disabled={!title || !value}
        >
            Xuất bản
        </Button>
    );
}

export default PublishBtn;
