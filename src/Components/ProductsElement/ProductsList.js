import styled from "styled-components";

const ProductsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  height: 240px;
  border: 2px solid rgb(7, 7, 7);
  background-color: black;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;

  img {
    width: 196px;
    height: 200px;
  }

  p {
    color: white;
    margin: 0;
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 100%;
    height: 100px;

    img {
      width: 70px;
      height: 70px;
    }

    p {
      font-size: 8px;
    }
  }
`;

export default ProductsList;
