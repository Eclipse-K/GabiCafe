import styled from "styled-components";

const CafeMenuContainer = styled.div`
  overflow: visible;
  background-color: white;
  width: 80%;
  padding: 20px;
  transform: translate(10%, 0);
  font-family: "Gugi", cursive;
  display: flex;
  flex-wrap: wrap;

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
