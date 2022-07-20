import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import styles from './SocialLink.module.scss';

const cx = classNames.bind(styles);

function SocialLink({ data }) {
    const renderIcon = () => {
        switch (data.icon) {
            case 'facebook':
                return <FaFacebookSquare />;
            case 'instagram':
                return <FaInstagramSquare />;
            case 'youtube':
                return <FaYoutube />;
            case 'linkedin':
                return <FaLinkedin />;
            case 'twitter':
                return <FaTwitter />;
            default:
                return;
        }
    };

    return (
        <>
            {data.link && (
                <div className={cx('link')}>
                    <div className={cx('icon')}>{renderIcon()}</div>
                    <a href={data.link} target="_blank" rel="noreferrer">
                        {data.link}
                    </a>
                </div>
            )}
        </>
    );
}

SocialLink.propTypes = {
    data: PropTypes.shape({
        link: PropTypes.string,
        icon: PropTypes.string.isRequired,
    }),
};

export default SocialLink;
