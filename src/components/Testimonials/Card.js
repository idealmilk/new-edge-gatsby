import React from 'react';

import { Card, Staff } from './styled';

const TestimonialCard = ({ text, name, role, client }) => {
  return (
    <Card>
      <p>{text}</p>
      <Staff>
        <p>{name}</p>
        <p>{`${role} at ${client}`}</p>
      </Staff>
    </Card>
  );
};

export default TestimonialCard;
