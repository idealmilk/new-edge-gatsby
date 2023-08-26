import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
display: flex:
align-items: center;
justify-content: center;
margin: 8rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 4rem auto;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 8rem);

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: calc(100% + 4rem);
  }
`;

export const BlogCard = styled(motion.div)`
  position: relative;
  /* flex-basis: calc(50% - 8rem); */
  margin: 0 4rem 6.4rem;

  */ p {
    font-size: 1.6rem;
  }

  p {
    margin-top: 1rem;
  }

  span {
    transition: background-size 1s ease;
    width: calc(100% + 1px); // IE fix
    padding-bottom: 2px;
    background-image: linear-gradient(transparent calc(100% - 2px), black 2px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
  }

  &:hover {
    span {
      background-size: 100% 100%;
    }
  }

  @media (hover: none) {
    &:hover {
      span {
        background-size: 0% 100%;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    flex-basis: calc(50% - 4rem);
    margin: 0 2rem 6.4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 0 2rem 6.4rem;
    p {
      font-size: 1.6rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: 1.8rem;
    flex-basis: 100%;
    height: auto;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 2rem;
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    object-fit: cover;
    text-align: center;
    transform: scale(1);
    transition: transform 0.4s ease-in-out;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 30rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    height: 24rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    height: 14rem;
  }

  @media (max-width: ${(props) =>
      props.theme.breakpoints.laptop} and (hover:none)) {
    &:hover {
      .gatsby-image-wrapper {
        transform: scale(1);
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 22rem;
  }
`;
