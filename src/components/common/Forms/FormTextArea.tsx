import React from 'react';

import { TextAreaContainer } from './styled';

type Props = {
  type: string;
  name: string;
  required?: boolean;
  value: string;
  placeholder: string;
  isColumn?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
};

const FormTextArea = ({
  name,
  required,
  value,
  placeholder,
  handleChange,
  style,
}: Props) => {
  return (
    <TextAreaContainer>
      <textarea
        name={name}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        style={style}
      />
    </TextAreaContainer>
  );
};

export default FormTextArea;
