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
                        value: userProfile.full_name,
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
                        value: userProfile.bio,
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
                        value: userProfile.avatar_url,
                        name: 'Avatar',
                        desc: 'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.',
                    }}
                    isEditable
                    type="photo"
                />
                <FieldWrapper
                    data={{
                        name: 'Email',
                        value: userProfile.email,
                    }}
                    inputProps={{ placeholder: 'Eg. hoclaptrinh@f8.edu.vn' }}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'User Name',
                        value: userProfile.username,
                        desc: `URL: http://localhost:3000/${userProfile.id}/${userProfile.username}`,
                    }}
                    inputProps={{ placeholder: 'Thêm user name' }}
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
