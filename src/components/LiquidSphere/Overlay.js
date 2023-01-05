import React from 'react';
import { a } from '@react-spring/web';

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  return (
    <div className='overlay'>
      <a.svg
        viewBox='0 0 583 720'
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
      >
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily='Inter'
          fontSize={12}
          fontWeight='bold'
          letterSpacing='0em'
        >
          <tspan x={40} y={270.909} />
        </text>
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily='Inter'
          fontSize={48}
          fontWeight='bold'
          letterSpacing='0em'
        >
          <tspan x={40} y={321.909} children='From idea to identity, we let' />
          <tspan x={40} y={372.909} children='the brand do the talking. ' />
          <tspan x={40} y={423.909} children='Maybe you should too.' />
        </text>
      </a.svg>
    </div>
  );
}
