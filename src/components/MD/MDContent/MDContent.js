import MDEditor from '@uiw/react-md-editor';
import PropTypes from 'prop-types';
import { memo } from 'react';

function MDContent({ content }) {
    return <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />;
}

MDContent.propTypes = {
    content: PropTypes.string.isRequired,
};

export default memo(MDContent);
