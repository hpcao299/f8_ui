import PropTypes from 'prop-types';
import Button from '~/components/Button';

function FieldButtons({ isEdit, setIsEdit, handleCancel, handleSubmit }) {
    return (
        <>
            {isEdit ? (
                <>
                    <Button fieldButtonSave onClick={handleSubmit}>
                        Lưu
                    </Button>
                    <Button fieldButtonDefault onClick={handleCancel}>
                        Hủy
                    </Button>
                </>
            ) : (
                <Button fieldButtonDefault onClick={() => setIsEdit(true)}>
                    Chỉnh sửa
                </Button>
            )}
        </>
    );
}

FieldButtons.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    setIsEdit: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default FieldButtons;
