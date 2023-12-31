import styled from "styled-components";

const ProductsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 100%;
  }
`;

export default ProductsBox;
