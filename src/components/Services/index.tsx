import React from 'react';

import type { Service } from 'types/types';

import { ServicesWrap, ServiceWrap, ServiceInner } from './styled';

type Props = {
  services: Service[];
};

const Services = ({ services }: Props) => {
  return (
    <ServicesWrap>
      {services.reverse().map((service, index) => {
        return (
          <ServiceWrap>
            <ServiceInner key={index}>
              <h3>{service.node.title}</h3>
              <ul>
                {service.node.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </ServiceInner>
          </ServiceWrap>
        );
      })}
    </ServicesWrap>
  );
};

export default Services;
