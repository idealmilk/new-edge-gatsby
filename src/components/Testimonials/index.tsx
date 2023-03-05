import React, { useState } from 'react';

import { CustomSlider } from 'components';
import type { Testimonial } from 'types/types';

import { Container } from './styled';
import TestimonialCard from './Card';

type Props = {
  testimonials: Testimonial[];
};

const Testimonials = ({ testimonials }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    beforeChange: (current: number, next: number) => setImageIndex(next),
  };

  return (
    <Container>
      <CustomSlider settings={settings}>
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className={index === imageIndex ? 'slide activeSlide' : 'slide'}
            >
              <TestimonialCard
                text={testimonial.node.testimonialText}
                name={testimonial.node.testimonialStaffName}
                role={testimonial.node.testimonialStaffRole}
                client={testimonial.node.clientName}
              />
            </div>
          );
        })}
      </CustomSlider>
    </Container>
  );
};

export default Testimonials;
