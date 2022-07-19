import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './BlogDetail.module.scss';
import Reaction from './components/Reaction';

const cx = classNames.bind(styles);

function UserDetails({ postDetails, setPostDetails }) {
    return (
        <div className={cx('aside')}>
            <h4 className={cx('username')}>{postDetails.full_name}</h4>
            {postDetails.bio && <p className={cx('user-bio')}>{postDetails.bio}</p>}
            <hr className={cx('divider')} />
            <Reaction postDetails={postDetails} setPostDetails={setPostDetails} />
        </div>
    );
}

UserDetails.propTypes = {
    postDetails: PropTypes.object.isRequired,
    setPostDetails: PropTypes.func.isRequired,
};

export default UserDetails;
