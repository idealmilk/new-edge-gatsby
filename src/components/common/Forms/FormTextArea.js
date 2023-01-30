import React from 'react';

import { TextAreaContainer } from './styled';

const FormTextArea = ({ handleChange, label, color, ...otherProps }) => {
  return (
    <TextAreaContainer color={color}>
      {label && <label>{label}</label>}
      <textarea onChange={handleChange} {...otherProps} />
    </TextAreaContainer>
  );
};

export default FormTextArea;
