import ReactMDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import { memo } from 'react';

function MDEditor({ value = '', onChange, ...props }) {
    return <ReactMDEditor value={value} onChange={onChange} {...props} />;
}

MDEditor.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(MDEditor);
