import styled from "styled-components";

const ProductsLargeImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 270px;
    justify-content: center;
  }
  @media all and (min-width: 450px) and (max-width: 1023px) {
    width: 400px;
  }
`;

export default ProductsLargeImgBox;
