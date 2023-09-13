import { Link } from "react-router-dom";
import styled from "styled-components";

const OffCloseLink = styled(Link)`
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

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .OffMenu {
    margin-left: 30px;
  }
`;

export default OffCloseLink;
