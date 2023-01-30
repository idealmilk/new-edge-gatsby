import styled from 'styled-components';

export const Container = styled.form`
  min-height: 160px;
  text-align: center;
`;

export const FormWrap = styled.div`
  transition: all 0.5s ease;
`;

export const InputWrap = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block !important;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
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
  width: ${(props) => (props.isColumn ? 'calc(50% - 14px)' : '100%')};
  margin-bottom: ${(props) => (props.isEmail ? '0' : '28px')};
  input {
    width: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 4rem;
    background: ${(props) => (props.color === 'blue' ? '#eef3f6' : 'white')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  width: ${(props) => (props.isColumn ? 'calc(50% - 14px)' : '100%')};
  margin-bottom: 28px;
  textarea {
    width: 100%;
    height: 200px;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 6px;
    background: ${(props) => (props.color === 'blue' ? '#eef3f6' : 'white')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
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

export const Button = styled.button`
  width: 32rem;
  font-size: 1.6rem;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.orange};
  color: white;
  border: 0;
  text-align: center;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: auto;
    padding: 1.4rem 3rem;
    margin-top: 1rem;
  }
`;
