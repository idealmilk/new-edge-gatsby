import React from 'react';

import { RichText } from 'components';
import type { StaffMember } from 'types/types';

import { StaffWrap, Member, MemberInner, ImgWrap, Bio } from './styled';

type Props = {
  staffMembers: StaffMember[];
};

const StaffMembers = ({ staffMembers }: Props) => {
  return (
    <StaffWrap>
      {staffMembers.reverse().map((member, index) => {
        return (
          <Member key={index}>
            <MemberInner>
              <ImgWrap>
                <img src={member.headshot.file.url} alt={member.name} />
              </ImgWrap>
              <Bio>
                <p className='staff-name'>{member.name}</p>
                <RichText {...member} />
              </Bio>
            </MemberInner>
          </Member>
        );
      })}
    </StaffWrap>
  );
};

export default StaffMembers;
