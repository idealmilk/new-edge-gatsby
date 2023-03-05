import React from 'react';

import { RichText } from 'components';
import type { StaffMember } from 'types/types';

import { StaffWrap, Member, MemberInner, ImgWrap, Bio } from './styled';

type Props = {
  staffMembers: StaffMember[];
};

const StaffMembers = ({ staffMembers }: Props) => {
  console.log(staffMembers.reverse());
  return (
    <StaffWrap>
      {staffMembers.map((member, index) => {
        return (
          <Member key={index}>
            <MemberInner>
              <ImgWrap>
                <img
                  src={member.node.headshot.file.url}
                  alt={member.node.name}
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
