import styled from "styled-components";

const ProductsLargeImgBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 500px;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 270px;
    justify-content: center;
  }
`;

export default ProductsLargeImgBox;
