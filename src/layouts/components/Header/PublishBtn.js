import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function PublishBtn() {
    return (
        <Button className={cx('publishBtn')} onClick={() => console.log('click')} primary disabled>
            Xuất bản
        </Button>
    );
}

export default PublishBtn;
