import React, { useState } from 'react';

import { FormInput } from 'components/common/Forms';

import { FormContainer, Form, Button } from './styled';

const EmailForm = ({ setEmailCallback, toggleModalOpen }) => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailCallback(email);
    toggleModalOpen();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <FormInput
          type='email'
          required
          name='email'
          value={email}
          placeholder='Enter your email address'
          isEmail={true}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Button type='submit'>Book consultation</Button>
      </Form>
    </FormContainer>
  );
};

export default EmailForm;
