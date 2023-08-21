import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ServicesWrap = styled.div`
  display: flex;
  width: 90rem;
  max-width: 100%;
  justify-content: space-between;
  margin: 8rem auto 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
    margin: 6rem auto;
  }
`;

type ServiceWrapProps = {
  marketingPage?: boolean;
};

export const ServiceWrap = styled(motion.div)<ServiceWrapProps>`
  width: ${(props) => (props.marketingPage ? '46%' : '30%')};
  border: 1px solid black;
  border-radius: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 80%;
    margin: 0 auto 4rem;
  }
`;

export const ServiceInner = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  background: white;
  transform: translate(1rem, 1rem);
  h3 {
    margin: 1rem 0;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    padding: 1rem;
  }
`;
