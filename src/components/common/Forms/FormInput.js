import React from 'react';

import { InputContainer } from './styled';

const FormInput = ({
  handleChange,
  label,
  isColumn,
  isEmail,
  color,
  ...otherProps
}) => {
  return (
    <InputContainer isColumn={isColumn} isEmail={isEmail} color={color}>
      {label && <label>{label}</label>}
      <input onChange={handleChange} {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
