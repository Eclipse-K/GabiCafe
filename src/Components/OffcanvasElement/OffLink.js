import { Link } from "react-router-dom";
import styled from "styled-components";

const OffLink = styled(Link)`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  width: 100%;
  height: 20px;
  background-color: black;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  .OffMenu {
    margin-left: 30px;
  }

  .OffMenu:hover {
    color: #c2c2c1;
  }
`;

export default OffLink;
