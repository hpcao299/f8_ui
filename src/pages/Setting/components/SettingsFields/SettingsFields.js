import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import settingApi from '~/api/settingApi';
import { messages } from '~/constants';
import { addNotification } from '~/slices/notificationSlice';
import FieldWrapper from '../FieldWrapper';
import GroupField from '../GroupField';
function SettingsFields({ userProfile, setUserProfile }) {
    const dispatch = useDispatch();

    const handleInputFieldSubmit = value => {
        settingApi
            .updateProfile(value)
            .then(() => {
                setUserProfile({ ...userProfile, ...value });
                dispatch(addNotification(messages.updatedSuccessfully));
            })
            .catch(() => {
                setUserProfile(userProfile);
                dispatch(addNotification(messages.updatedFailed));
            });
    };

    return (
        <>
            <GroupField heading="Thông tin cá nhân">
                <FieldWrapper
                    data={{
                        name: 'Họ tên',
                        value: userProfile.full_name || '',
                        desc: 'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Thêm tên của bạn',
                        maxLength: 50,
                        name: 'full_name',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Bio',
                        value: userProfile.bio || '',
                        desc: 'Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn.',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Thêm giới thiệu',
                        maxLength: 150,
                        name: 'bio',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        value: userProfile.avatar_url || '',
                        name: 'Avatar',
                        desc: 'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.',
                    }}
                    isEditable
                    type="photo"
                />
                <FieldWrapper
                    data={{
                        name: 'Email',
                        value: userProfile.email || '',
                    }}
                    inputProps={{ placeholder: 'Eg. hoclaptrinh@f8.edu.vn' }}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'User Name',
                        value: userProfile.username || '',
                        desc: `URL: ${process.env.REACT_APP_CLIENT_BASE_URL}/${
                            userProfile.id || ''
                        }/${userProfile.username || ''}`,
                    }}
                    inputProps={{ placeholder: 'Thêm user name' }}
                    type="input"
                />
            </GroupField>

            <GroupField heading="Mạng xã hội">
                <FieldWrapper
                    data={{
                        name: 'Facebook',
                        value: userProfile.facebook_url || '',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Eg. https://www.facebook.com/hoclaptrinhf8',
                        maxLength: 150,
                        name: 'facebook_url',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Youtube',
                        value: userProfile.youtube_url || '',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Eg. https://www.youtube.com/c/F8VNOfficial',
                        maxLength: 150,
                        name: 'youtube_url',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Linkedin',
                        value: userProfile.linkedin_url || '',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Eg. https://www.linkedin.com/in/hoclaptrinhf8/',
                        maxLength: 150,
                        name: 'linkedin_url',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Instagram',
                        value: userProfile.instagram_url || '',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Eg. https://www.instagram.com/hoclaptrinhf8/',
                        maxLength: 150,
                        name: 'instagram_url',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Twitter',
                        value: userProfile.twitter_url || '',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Eg. https://twitter.com/hoclaptrinhf8',
                        maxLength: 150,
                        name: 'twitter_url',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
            </GroupField>
        </>
    );
}

SettingsFields.propTypes = {
    userProfile: PropTypes.object.isRequired,
    setUserProfile: PropTypes.func,
};

export default SettingsFields;
