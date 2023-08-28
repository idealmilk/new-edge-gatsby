import styled from 'styled-components';

export const InnerWrap = styled.div`
  position: relative;
  width: 1300px;
  max-width: 90%;
  margin: auto;
`;

export const InnerWrapMax = styled(InnerWrap)`
  max-width: 100%;
`;

export const InnerWrapMin = styled(InnerWrap)`
  width: 1000px;
`;

export const InnerFlexWrap = styled(InnerWrap)`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const InnerFlexWrapMin = styled(InnerFlexWrap)`
  width: 1000px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const TextWrap = styled.div`
  width: 80rem;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export const TextWrapMin = styled(TextWrap)`
  width: 60rem;
`;

export const BodyWrap = styled.div`
  width: 66rem;
  max-width: 90%;
  margin: 0 auto;
  &:last-of-type {
    margin-bottom: 8rem;
  }
  h3 {
    margin: 3rem 0 1rem;
  }
  .cover-image {
    display: block;
    width: 40rem;
    max-height: 30rem;
    max-width: 90%;
    object-fit: cover;
    border-radius: 2.5rem;
    margin: -16rem auto 8rem;
  }
  a {
    position: relative;
    color: ${(props) => props.theme.colors.orange};
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.colors.orange};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    .cover-image {
      margin: -14rem auto 8rem;
    }
  }
`;

export const CenterWrap = styled.div`
  width: 100%;
  margin: -10rem 0 6rem;
  text-align: center;
  a {
    margin: 0 auto;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin: -2rem 0 6rem;
  }
`;
