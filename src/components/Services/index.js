import React from 'react';

import { ServicesWrap, Service, ServiceInner } from './styled';

const Services = ({ edges }) => {
  return (
    <ServicesWrap>
      {Object.values(edges)
        .reverse()
        .map((service, index) => {
          console.log(service.node.features);
          return (
            <Service>
              <ServiceInner key={index}>
                <p>{service.node.title}</p>
                <ul>
                  {service.node.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </ServiceInner>
            </Service>
          );
        })}
    </ServicesWrap>
  );
};

export default Services;
