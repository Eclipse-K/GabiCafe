import { Link } from "react-router-dom";
import styled from "styled-components";

const OffCloseLink = styled(Link)`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  width: 90%;
  height: 50px;
  justify-content: right;
  align-items: center;
  background-color: black;
  color: white;

  .OffIcon {
    width: 40px;
    height: 40px;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  }

  .OffIcon:hover {
    width: 50px;
    height: 50px;
    color: #c2c2c1;
  }
`;

export default OffCloseLink;
