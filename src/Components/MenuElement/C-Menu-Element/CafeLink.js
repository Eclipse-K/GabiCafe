import { Link } from "react-router-dom";
import styled from "styled-components";

const CafeLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover::before {
    content: "뒤로 가기";
    visibility: visible;
    width: 100px;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ecf0f1;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 3;
    bottom: 125%;
    right: 50%;
    margin-left: -100px;
    opacity: 1;
    transition: opacity 0.3s;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  @media all and (min-width: 281px) and (max-width: 432px) {
    font-size: 25px;
  }
`;

export default CafeLink;
