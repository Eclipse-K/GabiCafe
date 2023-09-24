import styled from "styled-components";

const CafeMenuImgItem = styled.div`
  display: inline-block;
  width: 50%;

  img {
    width: 200px;
    height: 200px;
    border: 2px solid black;
  }

  p {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  @media all and (max-width: 768px) {
    img {
      width: 100px;
      height: 100px;
    }

    p {
      font-size: 13px;
    }
  }
`;

export default CafeMenuImgItem;
