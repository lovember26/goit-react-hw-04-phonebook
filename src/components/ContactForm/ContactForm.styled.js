import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Input = styled.input`
  border: 1px solid #7a80b7;
  border-radius: 5px;
  height: 20px;
  padding-left: 5px;
  :focus {
    outline: 1px solid #723fb5;
  }
`;
export const Button = styled.button`
  padding: 5px;
  width: inherit;
  background-color: #929ae0;
  border: 1px solid #7a80b7;
  border-radius: 5px;

  cursor: pointer;
  :hover {
    background-color: #723fb5;
  }
`;
