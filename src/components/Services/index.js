import React from 'react';

import { RichText } from 'components';

import { ServicesWrap, Service, ImgWrap, Bio } from './styled';

const Services = ({ edges }) => {
  return (
    <ServicesWrap>
      {Object.values(edges)
        .reverse()
        .map((service, index) => {
          console.log(service.node.features);
          return (
            <Service key={index}>
              <p>{service.node.title}</p>
              <ul>
                {service.node.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </Service>
          );
        })}
    </ServicesWrap>
  );
};

export default Services;
