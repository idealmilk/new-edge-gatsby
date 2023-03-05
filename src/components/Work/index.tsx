import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import type { ProjectSummary } from 'types/types';

import { BlogCard, ImgWrap } from './styled';

type Props = {
  projects: ProjectSummary[];
};

const Work = ({ projects }: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 50: 1, 480: 2 }}>
      <Masonry style={{ margin: '0px auto 8rem auto' }}>
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
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Work;
