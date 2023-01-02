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
  background: ${(props) =>
    props.background === 'blue' ? '#EEF4F6' : 'transparent'};
`;

export const ChildrenWrap = styled.div`
  /* transform: translateY(11.05rem);
  padding-bottom: 11.05rem; */
`;

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
