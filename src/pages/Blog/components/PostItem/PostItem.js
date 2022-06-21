import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles);

function PostItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')}>
                    <Link to="/@nguyenvana">
                        <Image
                            isAvatar
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4c4a2a65313ace90d091da8320e66cb2~c5_100x100.jpeg?x-expires=1655974800&x-signature=NFBKtta2htPPptuIMA0YD710mD0%3D"
                            alt="Avatar"
                        />
                    </Link>
                    <Link to="/@nguyenvana">
                        <span>Phuc Cao</span>
                    </Link>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Link to="/blog/san-pham-react-sau-2-tuan-cham-chi-hoc-tai-f8">
                        <h3>Sản phẩm react sau 2 tuần chăm chỉ học tại f8 </h3>
                    </Link>
                    <p>
                        Mình là một học viên đang sinh sống và làm việc tại Nhật Bản , Vốn là dân
                        trái ngành muốn quay đầu học lại IT để có thể tìm kiếm...
                    </p>
                    <div>
                        <span>25 ngày trước</span>
                        <span className={cx('dot')}>·</span>
                        <span>2 phút đọc</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
