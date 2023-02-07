import React from 'react';
import { Link } from 'gatsby';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { BlogCard, ImgWrap } from './styled';

const Work = ({ edges }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
      <Masonry
        style={{ width: 'calc(100% + 8rem)', margin: '0px -8rem 8rem -4rem' }}
      >
        {edges.map((edge, pos) => {
          return (
            <BlogCard {...edge} key={pos}>
              <ImgWrap>
                <Link to={`/work/${edge.node.slug}`}>
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

export default Work;
