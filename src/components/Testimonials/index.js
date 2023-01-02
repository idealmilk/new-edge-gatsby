import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <h2>What clients say</h2>
      <Slider {...settings}>
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
      </Slider>
    </Container>
  );
};

export default Testimonials;
