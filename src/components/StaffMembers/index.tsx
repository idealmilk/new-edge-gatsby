import React, { useRef } from 'react';

import { CustomSlider, RichText } from 'components';
import type { StaffMemberTypes } from 'types/types';

import {
  StaffWrap,
  MobileStaffWrap,
  Member,
  MemberInner,
  ImgWrap,
  Bio,
} from './styled';
import { InnerWrap } from 'components/common/Containers/styled';
import { motion, useInView } from 'framer-motion';

type Props = {
  staffMembers: StaffMemberTypes[];
};

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0px',
  cssEase: 'linear',
  centerMode: true,
};

const StaffMembers = ({ staffMembers }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div ref={containerRef}>
      <InnerWrap>
        <StaffWrap>
          {staffMembers.map((member, index) => {
            return (
              <Member
                key={index}
                as={motion.div}
                style={{
                  transform: isInView
                    ? 'translate(0 , 0)'
                    : index === 0
                    ? 'translate(-50vw, 0)'
                    : index === 1
                    ? 'translate(0, 20rem)'
                    : 'translate(50vw, 0)',
                  // transitionDelay: "0.4",
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                }}
              >
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
    </div>
  );
};

export default StaffMembers;
