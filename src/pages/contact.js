import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { PageHeader, SEO } from 'components';
import { ContactForm } from 'components/common/Forms';
import { BodyWrap } from 'components/common/Containers/styled';

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO title='Contact' />
      <PageHeader title='Contact Us' />

      <BodyWrap>
        <ContactForm contactType='Contact Page' />
      </BodyWrap>
    </MainLayout>
  );
};

export default ContactPage;
