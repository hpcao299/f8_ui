import FieldWrapper from '../FieldWrapper';
import GroupField from '../GroupField';

function SettingsFields() {
    const handleInputFieldSubmit = value => {
        console.log(value);
    };

    return (
        <>
            <GroupField heading="Thông tin cá nhân">
                <FieldWrapper
                    data={{
                        name: 'Họ tên',
                        value: 'Example name',
                        desc: 'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.',
                    }}
                    isEditable
                    inputProps={{
                        placeholder: 'Thêm tên của bạn',
                        maxLength: 50,
                        name: 'full-name',
                    }}
                    handleSubmit={handleInputFieldSubmit}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'Bio',
                        value: 'example bio',
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
                        value: 'data:image/jpeg;base64,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',
                        name: 'Avatar',
                        desc: 'Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.',
                    }}
                    isEditable
                    type="photo"
                />
                <FieldWrapper
                    data={{
                        name: 'Email',
                        value: 'example@example.com',
                    }}
                    inputProps={{ placeholder: 'Eg. hoclaptrinh@f8.edu.vn' }}
                    type="input"
                />
                <FieldWrapper
                    data={{
                        name: 'User Name',
                        value: 'example-name-1',
                        desc: 'URL: https://fullstack.edu.vn/@example-name-1',
                    }}
                    inputProps={{ placeholder: 'Thêm user name' }}
                    type="input"
                />
            </GroupField>
        </>
    );
}

export default SettingsFields;
