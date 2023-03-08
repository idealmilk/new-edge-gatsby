import React from 'react';
import { Link } from 'gatsby';

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
  return (
    <Container>
      <InnerWrap>
        <h4>
          We’re building things in Brixton. Come and say hello, the coffee's on
          us.
        </h4>
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
                <PageItem style={{ marginBottom: '2rem' }} key={0}>
                  Site Map
                </PageItem>

                <PageItem key={1}>
                  <Link to='/work'>Work</Link>
                </PageItem>
                <PageItem key={2}>
                  <Link to='/about'>About</Link>
                </PageItem>
                <PageItem key={3}>
                  <Link to='/contact'>Contact</Link>
                </PageItem>
              </PageList>

              <PageList>
                <PageItem style={{ marginBottom: '2rem' }} key={0}>
                  Legal
                </PageItem>
                <PageItem key={1}>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </PageItem>
                <PageItem key={2}>
                  <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                </PageItem>
              </PageList>
            </PagesWrap>
          </Pages>
        </Content>
        <SmallPrint>
          <p>© NewEdge Studio 2023. All Rights Reserved</p>
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
