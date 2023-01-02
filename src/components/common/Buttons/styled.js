import styled from 'styled-components';

export const Container = styled.button`
  display: inline-block;
  box-sizing: border-box;
  z-index: 100;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => (props.hollow ? 'black' : '#ffffff')};
  letter-spacing: 1px;
  background: ${(props) =>
    props.hollow ? 'transparent' : props.theme.colors.orange};
  border-radius: 28px;
  padding: 14px 28px;
  line-height: 1.25;
  letter-spacing: 1px;
  border: ${(props) =>
    props.hollow ? `2px solid ${props.theme.colors.orange}` : 'none'};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.5s ease-out;
  a {
    color: ${(props) => (props.hollow ? 'black' : 'white')};
    font-size: 1.5rem;
  }
  &:hover {
    opacity: 0.9;
  }
`;
