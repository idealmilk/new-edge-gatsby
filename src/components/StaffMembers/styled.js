import styled from 'styled-components';

export const StaffWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Member = styled.div`
  width: 28%;
  p {
    font-size: 2.6rem;
  }
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    &:hover {
      transform: none;
    }
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.4rem;
  img {
    width: 100%;
  }
`;

export const Bio = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1.8rem;
  }
`;
