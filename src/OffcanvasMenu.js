import OffCloseLink from "./Components/OffcanvasElement/OffCloseLink";
import OffContainer from "./Components/OffcanvasElement/OffContainer";
import OffLink from "./Components/OffcanvasElement/OffLink";
import { FiX } from "react-icons/fi";

function OffcanvasMenu({ closeOffcanvas }) {
  const offcanvasClick = () => {
    closeOffcanvas();
  };

  return (
    <OffContainer>
      <OffCloseLink onClick={offcanvasClick}>
        <FiX />
      </OffCloseLink>
      <OffLink onClick={offcanvasClick}>
        <div className="OffMenu">Information</div>
      </OffLink>
      <OffLink to="/Menu" onClick={offcanvasClick}>
        <div className="OffMenu">Menu</div>
      </OffLink>
      <OffLink to="/Products" onClick={offcanvasClick}>
        <div className="OffMenu">Products</div>
      </OffLink>
      <OffLink to="/Login" onClick={offcanvasClick}>
        <div className="OffMenu">Login</div>
      </OffLink>
    </OffContainer>
  );
}

export default OffcanvasMenu;
