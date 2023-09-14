import { Link } from "react-router-dom";
import styled from "styled-components";

const OffCloseLink = styled(Link)`
  display: flex;
  padding: 10px;
  margin-top: 15px;
  width: 90%;
  height: 50px;
  justify-content: right;
  background-color: black;
  color: white;

  svg {
    right: 0;
    width: 3rem;
    height: 3rem;
    transform: rotate(-180deg);
  }
`;

export default OffCloseLink;
