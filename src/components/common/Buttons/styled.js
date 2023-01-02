import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  margin: 1em;
  padding: 1em 2em;
  box-sizing: border-box;
  background: none;
  border: 0;
  box-shadow: inset 0 0 0 2px #f45e61;
  font-size: inherit;
  font-weight: 700;
  vertical-align: middle;
  width: 6em;
  height: 6em;
  padding: 0;
  border-radius: 100%;
  box-shadow: none;
  color: black;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    box-sizing: inherit;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 100%;
  }

  &:before {
    border: 2px solid transparent;
  }

  &:after {
    border: 0 solid transparent;
  }

  &:hover {
    color: black;

    &:before {
      border-top-color: black;
      border-right-color: black;
      border-bottom-color: black;
      transition: border-top-color 0.15s linear,
        border-right-color 0.15s linear 0.1s,
        border-bottom-color 0.15s linear 0.2s;
      transform: rotate(405deg);
    }

    &:after {
      border-top: 2px solid black;
      border-left-width: 2px;
      border-right-width: 2px;
      transform: rotate(270deg);
      transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
      transform: rotate(315deg);
    }
  }
`;
