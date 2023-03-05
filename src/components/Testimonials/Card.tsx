import React from 'react';

import { Card, CardInner, Staff } from './styled';

type Props = {
  text: string;
  name: string;
  role: string;
  client: string;
  solo?: boolean;
};

const TestimonialCard = ({ text, name, role, client, solo }: Props) => {
  if (solo) {
    return (
      <Card>
        <CardInner solo={solo}>
          <p>{text}</p>
          <Staff>
            <p>{name}</p>
            <p>{`${role} at ${client}`}</p>
          </Staff>
        </CardInner>
      </Card>
    );
  }

  return (
    <CardInner solo={solo}>
      <p>{text}</p>
      <Staff>
        <p>{name}</p>
        <p>{`${role} at ${client}`}</p>
      </Staff>
    </CardInner>
  );
};

export default TestimonialCard;
