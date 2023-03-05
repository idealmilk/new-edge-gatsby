import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from 'components/common/Buttons';
import { FormInput } from 'components/common/Forms';

import {
  Container,
  FormWrap,
  InputWrap,
  InputColumn,
  FormResponse,
} from './styled';
import FormTextArea from './FormTextArea';

type Props = {
  givenEmail?: string;
  contactType?: string;
  clickOrigin?: string;
};

const ContactForm = ({ givenEmail, contactType, clickOrigin }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  if (givenEmail) {
    setEmail(givenEmail);
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID as string,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.GATSBY_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          setResponseMessage('Your interest has been successfully registered');
          e.currentTarget.reset();
        },
        (error) => {
          setResponseMessage(
            'We could not complete your request, please try again later'
          );
        }
      );
  };

  return (
    <Container ref={form} onSubmit={sendEmail}>
      <FormWrap>
        <InputWrap>
          <InputColumn>
            <FormInput
              type='text'
              name='first_name'
              required
              value={firstName}
              placeholder='First name'
              isColumn={true}
              handleChange={(e) => setFirstName(e.target.value)}
            />

            <FormInput
              type='text'
              name='last_name'
              required
              value={lastName}
              placeholder='Last name'
              isColumn={true}
              handleChange={(e) => setLastName(e.target.value)}
            />

            <FormInput
              type='email'
              required
              name='email'
              value={email}
              placeholder='Email address'
              isColumn={true}
              handleChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              type='text'
              name='number'
              required
              value={number}
              placeholder='Phone number'
              style={{ marginBottom: '20px' }}
              isColumn={true}
              handleChange={(e) => setNumber(e.target.value)}
            />
          </InputColumn>
          <InputColumn>
            <FormTextArea
              type='text'
              name='message'
              required
              value={message}
              placeholder='Enter your message'
              style={{ marginBottom: '20px' }}
              isColumn={true}
              handleChange={(e) => setMessage(e.target.value)}
            />
          </InputColumn>
        </InputWrap>

        <input type='hidden' name='contact_type' defaultValue={contactType} />

        <input type='hidden' name='click_origin' defaultValue={clickOrigin} />

        <Button type='submit' value='send'>
          Submit enquiry
        </Button>
      </FormWrap>
      <FormResponse>
        <p>{responseMessage === '' ? '' : responseMessage}</p>
      </FormResponse>
    </Container>
  );
};

export default ContactForm;
