import styled from 'styled-components';

export const StaffWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 8rem auto 10rem;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Member = styled.div`
  width: 30%;
  border: 1px solid black;
  border-radius: 1rem;
`;

export const MemberInner = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  height: 100%;
  background: white;
  transform: translate(1rem, 1rem);
  overflow: hidden;
  .staff-name {
    font-size: 2.6rem;
    margin-bottom: 2rem;
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
  p {
    font-size: 1.8rem;
  }
`;
