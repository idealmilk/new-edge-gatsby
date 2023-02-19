import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './styled';
import TestimonialCard from './Card';

const Testimonials = ({ edges }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    infinite: true,
    lazyLoad: false,
    slidesToShow: 3,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Container>
      <Slider {...settings}>
        {Object.values(edges).map((edge, index) => {
          return (
            <div
              key={index}
              className={index === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              <TestimonialCard
                text={edge.node.testimonialText}
                name={edge.node.testimonialStaffName}
                role={edge.node.testimonialStaffRole}
                client={edge.node.clientName}
              />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Testimonials;
