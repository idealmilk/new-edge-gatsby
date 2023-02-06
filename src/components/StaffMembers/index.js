import React from 'react';

import { RichText } from 'components';

import { StaffWrap, Member, ImgWrap, Bio } from './styled';

const StaffMembers = ({ edges }) => {
  return (
    <StaffWrap>
      {Object.values(edges)
        .reverse()
        .map((member, index) => {
          return (
            <Member key={index}>
              <ImgWrap>
                <img
                  src={member.node.headshot.file.url}
                  alt={member.node.title}
                />
              </ImgWrap>
              <p>{member.node.name}</p>
              <Bio>
                <RichText {...member.node.bio} />
              </Bio>
            </Member>
          );
        })}
    </StaffWrap>
  );
};

export default StaffMembers;
