import React from 'react';

import MainLayout from 'layouts/MainLayout';
import ContactHeader from 'assets/PageHeaders/contact.gif';
import { Contact, PageHeader, SEO } from 'components';
import { ContactForm } from 'components/common/Forms';
import { BodyWrap } from 'components/common/Containers/styled';

const ContactPage = () => {
  return (
    <MainLayout>
      <SEO title='Contact' description='Get in contact with us!' />
      <PageHeader title='Contact' gif={ContactHeader} />

      <section>
        <Contact />
      </section>

      <section>
        <BodyWrap>
          <h3
            style={{ width: '60%', margin: '0 auto 4rem', textAlign: 'center' }}
          >
            Alternatively fill out this form and we'll get back to you asap!
          </h3>
          <ContactForm contactType='Contact Page' />
        </BodyWrap>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
