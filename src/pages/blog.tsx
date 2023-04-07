import React, { useContext, useEffect } from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import AboutHeader from 'assets/PageHeaders/about.gif';
import { Blog, PageHeader, SEO } from 'components';
import { CenterWrap, InnerWrap } from 'components/common/Containers/styled';
import MainLayout from 'layouts/MainLayout';
import { BlogTypes } from 'types/types';
import { LoaderContext } from 'context/LoaderContext';

type GraphQLResult = {
  allContentfulBlogPost: {
    edges: BlogTypes[];
  };
};

const AboutPage = ({ data }: PageProps<GraphQLResult>) => {
  const { allContentfulBlogPost } = data;
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
      <SEO
        title='Blog'
        description='Musings, stories and insights into life at NewEdge Studio, as we turn start-up ideas into scale-up brand identities.'
      />
      <InnerWrap>
        <PageHeader title='Blog' gif={AboutHeader} />

        <CenterWrap style={{ margin: '8rem auto 0', width: '80%' }}>
          <p>
            Musings, stories and insights into life at NewEdge Studio, as we
            turn start-up ideas into scale-up brand identities.
          </p>
        </CenterWrap>

        <Blog data={allContentfulBlogPost.edges} />
      </InnerWrap>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { createdAt: ASC }) {
      edges {
        node {
          title
          slug
          coverImage {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default AboutPage;
