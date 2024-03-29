import React, { useRef } from 'react';
import { Link } from 'gatsby';
import { IGatsbyImageData, getImage, GatsbyImage } from 'gatsby-plugin-image';
import { motion, useInView } from 'framer-motion';

import type { BlogTypes } from 'types/types';

import { BlogCard, BlogFlexWrap, ImgWrap } from './styled';
import { InnerWrap } from 'components/common/Containers/styled';

type Props = {
  data: BlogTypes[];
};

const Blog = ({ data }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <InnerWrap ref={containerRef}>
      <BlogFlexWrap>
        {data.map((blog, index) => {
          const image: IGatsbyImageData | undefined = getImage(
            blog.node.coverImage
          );

          return (
            <BlogCard
              {...blog.node}
              key={index}
              as={motion.div}
              style={{
                transform: isInView
                  ? 'translateX(0)'
                  : index % 2 === 0
                  ? 'translateX(-50vw)'
                  : 'translateX(50vw)',
                // transitionDelay: "0.4",
                opacity: isInView ? 1 : 0,
                transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
              }}
            >
              <ImgWrap>
                <Link to={`/blog/${blog.node.slug}`}>
                  {image && <GatsbyImage image={image} alt={blog.node.title} />}
                </Link>
              </ImgWrap>
              <p>
                <span>{blog.node.title}</span>
              </p>
            </BlogCard>
          );
        })}
      </BlogFlexWrap>
    </InnerWrap>
  );
};

export default Blog;
