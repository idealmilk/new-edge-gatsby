import React, { useContext, useEffect } from 'react';

import MainLayout from 'layouts/MainLayout';
import ContactHeader from 'assets/PageHeaders/contact.gif';
import { Contact, PageHeader, SEO } from 'components';
import { ContactForm } from 'components/common/Forms';
import { BodyWrap } from 'components/common/Containers/styled';
import { LoaderContext } from 'context/LoaderContext';

const ContactPage = () => {
  const { showLoader, toggleLoader } = useContext(LoaderContext);

  useEffect(() => {
    if (showLoader) {
      const loader = document.getElementById('loader');
      if (loader) {
        console.log(loader);
        setTimeout(() => (loader.style.transform = 'translateY(-102vh)'), 2000);
      }
      setTimeout(() => toggleLoader(), 3000);
    }
  }, [showLoader]);
  return (
    <MainLayout showLoader={showLoader}>
      <SEO title='Contact' description='Get in contact with us!' />
      <PageHeader title='Contact' gif={ContactHeader} />

      <Contact />
      <BodyWrap>
        <h3
          style={{ width: '60%', margin: '0 auto 4rem', textAlign: 'center' }}
        >
          Alternatively fill out this form and we'll get back to you asap!
        </h3>
        <ContactForm contactType='Contact Page' />
      </BodyWrap>
    </MainLayout>
  );
};

export default ContactPage;
