import styled from "styled-components";

const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border: 2px solid rgb(7, 7, 7);
  background-color: black;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;

  img {
    width: 100px;
    height: 100px;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 100%;
    height: 40px;

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 8px;
    }
  }
`;

export default ProductsList;
