import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import type { ProjectSummaryTypes } from 'types/types';

import {
  Container,
  WorkCard,
  ImgWrap,
  ResponsiveMasonry,
  MasonryLeft,
  MasonryRight,
  MobileList,
} from './styled';
import { motion, useInView } from 'framer-motion';

type Props = {
  projects: ProjectSummaryTypes[];
};

const Work = ({ projects }: Props) => {
  let oddIndexes: ProjectSummaryTypes[] = [];
  let evenIndexes: ProjectSummaryTypes[] = [];

  for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      evenIndexes.push(projects[i]);
    } else {
      oddIndexes.push(projects[i]);
    }
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <Container ref={containerRef}>
      <ResponsiveMasonry>
        <MasonryLeft
          as={motion.div}
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(-50vw)',
            // transitionDelay: "0.4",
            opacity: isInView ? 1 : 0,
            transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
          }}
        >
          {evenIndexes.map((project, index) => {
            const image: IGatsbyImageData | undefined = getImage(
              project.node.thumbnail
            );

            return (
              <Link to={`/work/${project.node.slug}`}>
                <WorkCard {...project.node} key={index}>
                  <ImgWrap>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={project.node.clientName}
                      />
                    )}
                  </ImgWrap>
                  <p>
                    <span>{project.node.metaDescription}</span>
                  </p>
                </WorkCard>
              </Link>
            );
          })}
        </MasonryLeft>
        <MasonryRight
          as={motion.div}
          style={{
            transform: isInView ? 'translateX(0)' : 'translateX(50vw)',
            // transitionDelay: "0.4",
            opacity: isInView ? 1 : 0,
            transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
          }}
        >
          {oddIndexes.map((project, index) => {
            const image: IGatsbyImageData | undefined = getImage(
              project.node.thumbnail
            );

            return (
              <Link to={`/work/${project.node.slug}`}>
                <WorkCard {...project.node} key={index}>
                  <ImgWrap>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={project.node.clientName}
                      />
                    )}
                  </ImgWrap>
                  <p>
                    <span>{project.node.metaDescription}</span>
                  </p>
                </WorkCard>
              </Link>
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
            <WorkCard {...project.node} key={index}>
              <ImgWrap>
                <Link to={`/work/${project.node.slug}`}>
                  {image && (
                    <GatsbyImage image={image} alt={project.node.clientName} />
                  )}
                </Link>
              </ImgWrap>
              <p>{project.node.metaDescription}</p>
            </WorkCard>
          );
        })}
      </MobileList>
    </Container>
  );
};

export default Work;
