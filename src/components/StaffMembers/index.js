import React from 'react';

import { RichText } from 'components';

import { StaffWrap, Member, MemberInner, ImgWrap, Bio } from './styled';

const StaffMembers = ({ edges }) => {
  return (
    <StaffWrap>
      {Object.values(edges)
        .reverse()
        .map((member, index) => {
          return (
            <Member key={index}>
              <MemberInner>
                <ImgWrap>
                  <img
                    src={member.node.headshot.file.url}
                    alt={member.node.title}
                  />
                </ImgWrap>
                <Bio>
                  <p className='staff-name'>{member.node.name}</p>
                  <RichText {...member.node.bio} />
                </Bio>
              </MemberInner>
            </Member>
          );
        })}
    </StaffWrap>
  );
};

export default StaffMembers;
