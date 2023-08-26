import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const ChildrenWrap = styled.div``;

export const EventTitle = styled.div`
  padding: 25px;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 2;
  margin-bottom: 25px;
  text-align: left;
`;

type LogoContainerProps = {
  isSubPage?: boolean;
};

export const LogoContainer = styled.div<LogoContainerProps>`
  display: none;
  width: 8rem;
  margin: 2rem 0 0 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: ${(props) => (props.isSubPage ? 'block' : 'none')};
  }
`;
