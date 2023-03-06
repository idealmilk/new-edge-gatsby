import styled from 'styled-components';

export const Container = styled.form`
  min-height: 160px;
  text-align: center;
`;

export const FormWrap = styled.div`
  transition: all 0.5s ease;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block !important;
  }
`;

export const InputColumn = styled.div`
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

export const FormResponse = styled.div`
  width: 100%;
  color: #969ca0;
  text-align: center;
  transition: all 0.5s ease-in;
`;

export const InputContainer = styled.div`
  margin: 0 1.4rem 1.4rem 0;
  input {
    width: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 4rem;
    border: 1px solid black;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  margin-bottom: 28px;
  height: 258px;
  textarea {
    width: 100%;
    height: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 2rem;
    border: 1px solid black;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  background: #ffffff;
  border-radius: 4rem;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    background: transparent;
    display: block;
    border-radius: 0;
  }
`;
