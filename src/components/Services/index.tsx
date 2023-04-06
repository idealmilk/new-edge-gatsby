import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import type { ServiceTypes } from 'types/types';

import { ServicesWrap, ServiceWrap, ServiceInner } from './styled';

type Props = {
  services: ServiceTypes[];
};

const Services = ({ services }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <ServicesWrap ref={containerRef}>
      {services.reverse().map((service, index) => {
        return (
          <ServiceWrap
            as={motion.div}
            style={{
              transform: isInView
                ? 'translate(0 , 0)'
                : index === 0
                ? 'translate(-50vw, 0)'
                : index === 1
                ? 'translate(0, 20rem)'
                : 'translate(50vw, 0)',
              // transitionDelay: "0.4",
              opacity: isInView ? 1 : 0,
              transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
            }}
          >
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
