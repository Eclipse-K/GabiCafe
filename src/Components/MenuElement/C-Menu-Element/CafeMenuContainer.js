import styled from "styled-components";

const CafeMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Gugi", cursive;

  h1 {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media all and (max-width: 700px) {
    padding: 10px;
    justify-content: space-between;
  }
`;

export default CafeMenuContainer;
