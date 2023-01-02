import React from 'react';
import { Link } from 'gatsby';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { BlogWrap, BlogCard, ImgWrap } from './styled';

const Works = ({ edges }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
      <Masonry>
        {edges.map((edge, pos) => {
          return (
            <BlogCard {...edge} key={pos}>
              <ImgWrap>
                <Link to={`/works/${edge.node.slug}`}>
                  <img
                    src={edge.node.thumbnail.file.url}
                    alt={edge.node.clientName}
                  />
                </Link>
              </ImgWrap>
              <p>{edge.node.metaDescription}</p>
            </BlogCard>
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Works;
