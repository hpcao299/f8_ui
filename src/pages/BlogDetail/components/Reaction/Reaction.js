import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import blogApi from '~/api/blogApi';
import config from '~/config';
import styles from './Reaction.module.scss';

const cx = classNames.bind(styles);

function Reaction({ postDetails, reactionDetails, setReactionDetails }) {
    const { currentUser } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleReactionClick = async () => {
        if (!currentUser) {
            return navigate(config.routes.signin);
        }

        const newIsReacted = reactionDetails.is_reacted ? false : true;
        const newReactionCount = reactionDetails.is_reacted
            ? reactionDetails.reaction_counts - 1
            : reactionDetails.reaction_counts + 1;

        setReactionDetails(() => ({ is_reacted: newIsReacted, reaction_counts: newReactionCount }));

        const patchData = reactionDetails.is_reacted ? { is_reacted: false } : { is_reacted: true };
        try {
            await blogApi.patchReactions(postDetails.id, patchData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('btn', {
                    active: reactionDetails.is_reacted,
                })}
                title="Nhấn để thích bài này"
                onClick={handleReactionClick}
            >
                {reactionDetails.is_reacted ? <FaHeart /> : <FaRegHeart />}
                <span>{reactionDetails.reaction_counts}</span>
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
    reactionDetails: PropTypes.object.isRequired,
    setReactionDetails: PropTypes.func.isRequired,
};

export default Reaction;
