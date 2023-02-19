import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { InnerWrap } from 'components/common/Containers/styled';

import {
  Container,
  Content,
  InfoWrap,
  Pages,
  PagesWrap,
  PageList,
  PageItem,
  SmallPrint,
} from './styled';

const Footer = () => {
  // const { twitter, linkedIn, copyright } = useStaticQuery(
  //   query
  // ).contentfulSiteData;

  return (
    <Container>
      <InnerWrap>
        <p style={{ marginBottom: '4rem', fontSize: '2rem' }}>
          We’re building things in Brixton. Come and say hello, the coffee's on
          us.
        </p>
      </InnerWrap>
      <InnerWrap>
        <Content>
          <InfoWrap>
            <p style={{ marginBottom: '2rem' }}>Find Us</p>
            <p style={{ marginBottom: '2rem' }}>
              The Department Store Studios,
              <br></br>19 Bellefields Road,
              <br></br>London,
              <br></br>SW9 9UH
            </p>
            <p>
              hello@newedgestud.io
              <br></br>(+44) 07713 442550
            </p>
          </InfoWrap>
          <Pages>
            <PagesWrap>
              <PageList>
                <PageItem style={{ marginBottom: '2rem' }}>Site Map</PageItem>

                <PageItem>
                  <Link to='/work'>Work</Link>
                </PageItem>
                <PageItem>
                  <Link to='/about'>About</Link>
                </PageItem>
                <PageItem>
                  <Link to='/contact'>Contact</Link>
                </PageItem>
              </PageList>

              <PageList>
                <PageItem style={{ marginBottom: '2rem' }}>Legal</PageItem>
                <PageItem>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </PageItem>
                <PageItem>
                  <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                </PageItem>
                <PageItem>
                  <Link to='/cookie-policy'>Cookie Policy</Link>
                </PageItem>
              </PageList>
            </PagesWrap>
          </Pages>
        </Content>
        <SmallPrint>
          <p>© NewEdge Studio 2022. All Rights Reserved</p>
        </SmallPrint>
      </InnerWrap>
    </Container>
  );
};

// const query = graphql`
//   query {
//     contentfulSiteData {
//       twitter
//       linkedIn
//       copyright
//     }
//   }
// `;

export default Footer;
