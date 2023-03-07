import React from 'react';

import { CustomSlider, RichText } from 'components';
import type { StaffMember } from 'types/types';

import {
  StaffWrap,
  MobileStaffWrap,
  Member,
  MemberInner,
  ImgWrap,
  Bio,
} from './styled';
import { InnerWrap } from 'components/common/Containers/styled';

type Props = {
  staffMembers: StaffMember[];
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0px',
  cssEase: 'linear',
  centerMode: true,
};

const StaffMembers = ({ staffMembers }: Props) => {
  return (
    <>
      <InnerWrap>
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
                    <h3>{member.node.name}</h3>
                    <RichText {...member.node.bio} />
                  </Bio>
                </MemberInner>
              </Member>
            );
          })}
        </StaffWrap>
      </InnerWrap>

      <MobileStaffWrap>
        <CustomSlider settings={settings}>
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
                    <h3>{member.node.name}</h3>
                    <RichText {...member.node.bio} />
                  </Bio>
                </MemberInner>
              </Member>
            );
          })}
        </CustomSlider>
      </MobileStaffWrap>
    </>
  );
};

export default StaffMembers;
