import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@gatsbyjs/reach-router';

import { ItemWrap, ParentWrap, ChildWrap, ChildItem } from './styled';

const CollapsibleListItem = ({ parent, children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const itemRef = useRef(null);
  const parentRef = useRef(null);
  const childrenRef = useRef(null);
  const openRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (collapsed) {
      childrenRef.current.style.height = 0;
      openRef.current.classList.remove('opened');
    } else {
      childrenRef.current.style.height =
        childrenRef.current.scrollHeight + 'px';
      openRef.current.classList.add('opened');
    }
  }, [collapsed]);

  return (
    <ItemWrap ref={itemRef}>
      <ParentWrap onClick={() => setCollapsed((c) => !c)}>
        <p ref={parentRef}>{parent}</p>
        <div ref={openRef} class='circle-plus closed'>
          <div class='circle'>
            <div class='horizontal'></div>
            <div class='vertical'></div>
          </div>
        </div>
      </ParentWrap>
      <ChildWrap ref={childrenRef}>
        {children.map((child) => {
          return (
            <ChildItem>
              -
              <Link
                to={child.slug}
                style={{
                  color:
                    location.pathname === child.slug
                      ? 'rgba(246, 95, 48, 1)'
                      : 'black',
                }}
              >
                {child.title}
              </Link>
            </ChildItem>
          );
        })}
      </ChildWrap>
    </ItemWrap>
  );
};

export default CollapsibleListItem;
