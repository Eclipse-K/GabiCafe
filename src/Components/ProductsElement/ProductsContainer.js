import styled from "styled-components";

const ProductsContainer = styled.div`
  overflow: visible;
  background-color: white;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  transform: translate(6%, 0);
  font-family: "Gugi", cursive;

  @media all and (min-width: 281px) and (max-width: 432px) {
    height: 700px;
  }
`;

export default ProductsContainer;
