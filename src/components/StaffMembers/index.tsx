import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { CustomSlider, RichText } from 'components';
import { InnerFlexWrap } from 'components/common/Containers/styled';
import type { StaffMemberTypes } from 'types/types';

import {
  StaffWrapMobile,
  Member,
  MemberInner,
  ImgWrap,
  Bio,
  StaffWrap,
} from './styled';

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
      <StaffWrap>
        <InnerFlexWrap>
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
        </InnerFlexWrap>
      </StaffWrap>

      <StaffWrapMobile>
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
      </StaffWrapMobile>
    </div>
  );
};

export default StaffMembers;
