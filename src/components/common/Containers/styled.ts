import styled from 'styled-components';

export const InnerWrap = styled.div`
  position: relative;
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const InnerWrapWork = styled.div`
  position: relative;
  max-width: 1300px;
  width: 100%;
  margin: auto;
`;

export const InnerFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const TightInnerWrap = styled(InnerWrap)`
  max-width: 1100px;
`;

export const TextWrap = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
  .team-section-text {
    margin: 8rem auto 16rem;
    width: 80%;
    text-align: center;
    @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
      width: 100%;
      margin: 8rem auto 6rem;
    }
  }
`;

export const FeatureWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12rem;
  h3 {
    margin-bottom: 4rem;
    line-height: 1.4;
  }
  .text {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .img {
    width: 35%;

    object-fit: cover;
    background: pink;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    img {
      width: 100%;
      margin: 4rem 0 0;

      object-fit: cover;
    }
    div {
      width: 100%;
    }
    .text {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    .text {
      width: 90%;
    }
  }
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
  margin: -10rem 0 8rem;
  text-align: center;
`;
