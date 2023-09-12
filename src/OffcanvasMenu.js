import { AiOutlineRight } from "react-icons/ai";
import OffContainer from "./Components/OffcanvasElement/OffContainer";
import OffLink from "./Components/OffcanvasElement/OffLink";

function OffcanvasMenu() {
  return (
    <OffContainer>
      <OffLink to="/">
        <AiOutlineRight className="OffIcon" />
      </OffLink>

      <OffLink>
        <div className="OffMenu">Information</div>
      </OffLink>
      <OffLink to="/Menu">
        <div className="OffMenu">Menu</div>
      </OffLink>
      <OffLink to="/Products">
        <div className="OffMenu">Products</div>
      </OffLink>
      <OffLink to="/Login">
        <div className="OffMenu">Login</div>
      </OffLink>
    </OffContainer>
  );
}

export default OffcanvasMenu;
