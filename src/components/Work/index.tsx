import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import type { ProjectSummary } from 'types/types';

import {
  Container,
  BlogCard,
  ImgWrap,
  ResponsiveMasonry,
  MasonryLeft,
  MasonryRight,
  MobileList,
} from './styled';

type Props = {
  projects: ProjectSummary[];
};

const Work = ({ projects }: Props) => {
  let oddIndexes: ProjectSummary[] = [];
  let evenIndexes: ProjectSummary[] = [];

  for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      evenIndexes.push(projects[i]);
    } else {
      oddIndexes.push(projects[i]);
    }
  }

  return (
    <Container>
      <ResponsiveMasonry>
        <MasonryLeft>
          {evenIndexes.map((project, index) => {
            const image: IGatsbyImageData | undefined = getImage(
              project.node.thumbnail
            );

            return (
              <BlogCard {...project.node} key={index}>
                <ImgWrap>
                  <Link to={`/work/${project.node.slug}`}>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={project.node.clientName}
                      />
                    )}
                  </Link>
                </ImgWrap>
                <p>{project.node.metaDescription}</p>
              </BlogCard>
            );
          })}
        </MasonryLeft>
        <MasonryRight>
          {oddIndexes.map((project, index) => {
            const image: IGatsbyImageData | undefined = getImage(
              project.node.thumbnail
            );

            return (
              <BlogCard {...project.node} key={index}>
                <ImgWrap>
                  <Link to={`/work/${project.node.slug}`}>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={project.node.clientName}
                      />
                    )}
                  </Link>
                </ImgWrap>
                <p>{project.node.metaDescription}</p>
              </BlogCard>
            );
          })}
        </MasonryRight>
      </ResponsiveMasonry>

      <MobileList>
        {projects.map((project, index) => {
          const image: IGatsbyImageData | undefined = getImage(
            project.node.thumbnail
          );

          return (
            <BlogCard {...project.node} key={index}>
              <ImgWrap>
                <Link to={`/work/${project.node.slug}`}>
                  {image && (
                    <GatsbyImage image={image} alt={project.node.clientName} />
                  )}
                </Link>
              </ImgWrap>
              <p>{project.node.metaDescription}</p>
            </BlogCard>
          );
        })}
      </MobileList>
    </Container>
  );
};

export default Work;
