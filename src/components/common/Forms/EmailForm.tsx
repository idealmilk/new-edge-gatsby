import React, { useState } from 'react';

import { FormInput } from 'components/common/Forms';

import { FormContainer, Form, Button } from './styled';

type Props = {
  setEmailCallback: any;
  toggleModalOpen: any;
};

const EmailForm = ({ setEmailCallback, toggleModalOpen }: Props) => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailCallback(email);
    toggleModalOpen();
  };
  const GATSBY_EMAILJS_SERVICE_ID: string =
    process.env.GATSBY_EMAILJS_SERVICE_ID!;
  const GATSBY_EMAILJS_TEMPLATE_ID: string =
    process.env.GATSBY_EMAILJS_TEMPLATE_ID!;
  const GATSBY_EMAILJS_PUBLIC_KEY: string =
    process.env.GATSBY_EMAILJS_PUBLIC_KEY!;
  return (
    <FormContainer>
      <Form onSubmit={handleFormSubmit}>
        <FormInput
          type='email'
          required
          name='email'
          value={email}
          placeholder='Enter your email address'
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Button type='submit'>Book consultation</Button>
      </Form>
    </FormContainer>
  );
};

export default EmailForm;
