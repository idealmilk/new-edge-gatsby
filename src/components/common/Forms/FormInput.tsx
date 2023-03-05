import React from 'react';

import { InputContainer } from './styled';

type Props = {
  type: string;
  name: string;
  required?: boolean;
  value: string;
  placeholder: string;
  isColumn?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
};

const FormInput = ({
  type,
  name,
  required,
  value,
  placeholder,
  handleChange,
  style,
}: Props) => {
  return (
    <InputContainer>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        style={style}
      />
    </InputContainer>
  );
};

export default FormInput;
