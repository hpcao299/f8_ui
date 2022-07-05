import classNames from 'classnames/bind';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import styles from './Reaction.module.scss';

const cx = classNames.bind(styles);

function Reaction() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn')} title="Nhấn để thích bài này">
                <FaRegHeart />
                <span>2</span>
            </div>
            <div className={cx('btn')}>
                <FaRegComment />
                <span>0</span>
            </div>
        </div>
    );
}

export default Reaction;
