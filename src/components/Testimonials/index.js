import React from 'react';

import { Container, InnerWrap, TextWrap } from './styled';
import TestimonialCard from './Card';

const Testimonials = ({ edges }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
  };

  return (
    <Container>
      {Object.values(edges).map((edge, index) => {
        return (
          <TestimonialCard
            text={edge.node.testimonialText}
            name={edge.node.testimonialStaffName}
            role={edge.node.testimonialStaffRole}
            client={edge.node.clientName}
          />
        );
      })}
    </Container>
  );
};

export default Testimonials;
