import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import OffContainer from "./Components/OffcanvasElement/OffContainer";

function OffcanvasMenu() {
  return (
    <OffContainer>
      <Link to="/">
        <AiOutlineRight />
      </Link>
    </OffContainer>
  );
}

export default OffcanvasMenu;
