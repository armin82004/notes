import { IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import logo from "../images/logo192.png";

const Header = () => {
  return (
    <div className="header">
    <div className="header-container">
      <div className="menu-container">
        <span className="menu">
          <IoMdMenu className="menu-button" size="1.4em" />
        </span>
        <img className="logo" src={logo} alt="logo" />
        <h1>Notes</h1>
      </div>
      <span className="menu search">
      <IoMdSearch size="1.4em" />
      </span>
    </div>
    </div>
  );
};

export default Header;
