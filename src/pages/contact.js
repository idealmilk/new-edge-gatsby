import React from 'react';

import MainLayout from 'layouts/MainLayout';
import { ContactHeader } from 'assets/PageHeaders';
import { PageHeader, SEO } from 'components';
import { ContactForm } from 'components/common/Forms';
import { BodyWrap } from 'components/common/Containers/styled';

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO title='Contact' />
      <PageHeader title='Contact' gif={ContactHeader} />

      <BodyWrap>
        <h3
          style={{ width: '60%', margin: '0 auto 4rem', textAlign: 'center' }}
        >
          Something witty here about emails!
        </h3>
        <ContactForm contactType='Contact Page' />
      </BodyWrap>
    </MainLayout>
  );
};

export default ContactPage;
