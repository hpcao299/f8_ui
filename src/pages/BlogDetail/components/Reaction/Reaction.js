import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import blogApi from '~/api/blogApi';
import config from '~/config';
import styles from './Reaction.module.scss';

const cx = classNames.bind(styles);

function Reaction({ postDetails, setPostDetails }) {
    const { currentUser } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleReactionClick = async () => {
        if (!currentUser) {
            return navigate(config.routes.signin);
        }

        const patchData = postDetails.is_reacted ? { is_reacted: false } : { is_reacted: true };
        try {
            const { data } = await blogApi.patchReactions(postDetails.id, patchData);

            setPostDetails(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('btn', {
                    active: postDetails.is_reacted,
                })}
                title="Nhấn để thích bài này"
                onClick={handleReactionClick}
            >
                {postDetails.is_reacted ? <FaHeart /> : <FaRegHeart />}
                <span>{postDetails.reaction_counts}</span>
            </div>
            <div className={cx('btn', 'disabled')}>
                <FaRegComment />
                <span>0</span>
            </div>
        </div>
    );
}

Reaction.propTypes = {
    postDetails: PropTypes.object.isRequired,
    setPostDetails: PropTypes.func.isRequired,
};

export default Reaction;
