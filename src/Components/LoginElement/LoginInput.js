import styled from "styled-components";

const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid ${({ error }) => (error ? `#f44336` : `#eeeeee`)};
  display: flex;
  font-size: 16px;
  outline: none;
  padding: 8px 0;
  margin: 10px 0 10px 0;
  width: 100%;
  font-family: "Gugi", cursive;

  ${({ error }) =>
    !error &&
    `
    &:focus {
      border-bottom: 2px solid #7760b4;
    }
`}

  &::placeholder {
    color: gray;
  }
`;

export default LoginInput;
