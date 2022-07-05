import PropTypes from 'prop-types';
import InputField from '../InputField';
import PhotoField from '../PhotoField';
import styles from './FieldWrapper.module.scss';

function FieldWrapper({ data, isEditable, handleSubmit, inputProps, type }) {
    return (
        <div className={styles.wrapper}>
            {type === 'input' && (
                <InputField
                    data={data}
                    isEditable={isEditable}
                    handleSubmit={handleSubmit}
                    inputProps={inputProps}
                />
            )}
            {type === 'photo' && <PhotoField data={data} isEditable={isEditable} />}
        </div>
    );
}

FieldWrapper.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        desc: PropTypes.string,
    }),
    isEditable: PropTypes.bool,
    handleSubmit: PropTypes.func,
    inputProps: PropTypes.object,
    type: PropTypes.oneOf(['input', 'photo']),
};

export default FieldWrapper;
