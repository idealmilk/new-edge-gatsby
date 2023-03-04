import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import { Button } from 'components/common/Buttons';

import { Container, ItemWrap } from './styled';

const Footer = () => {
  return (
    <Container>
      <ItemWrap>
        <a href='tel:+447713442550'>
          <Button>
            <FaPhoneAlt />
          </Button>
        </a>
        <p>Drop us a line</p>
      </ItemWrap>
      <ItemWrap>
        <a href='mailto:hello@newedgestud.io'>
          <Button>
            <FiMail />
          </Button>
        </a>
        <p>Send us an email</p>
      </ItemWrap>
    </Container>
  );
};

export default Footer;
