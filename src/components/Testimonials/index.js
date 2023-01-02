import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, InnerWrap, TextWrap } from './styled';
import TestimonialCard from './Card';

const Testimonials = ({ edges }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <FaArrowDown />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <FaArrowUp />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Container>
      <Slider {...settings}>
        {Object.values(edges).map((edge, index) => {
          return (
            <div
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
