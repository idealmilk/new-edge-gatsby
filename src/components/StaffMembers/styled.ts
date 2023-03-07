import styled from 'styled-components';

export const StaffWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 8rem auto 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MobileStaffWrap = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Member = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 90% !important;
    margin: 0 6% 2rem 4%;
  }
`;

export const MemberInner = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  height: 100%;
  background: white;
  transform: translate(1rem, 1rem);
  overflow: hidden;
  h3 {
    margin: 1rem 0;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    transform: scale(1.01);
  }
`;

export const Bio = styled.div`
  padding: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    padding: 1rem;
  }
`;
