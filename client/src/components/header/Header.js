import "./header-styles/HeaderIcons.css";
import "./header-styles/HomePageHeader.css";
import HeaderIcons from "./HeaderIcons";
import HomePageHeader from "./HomePageHeader";
import Popup from "./Popup";

const Header = () => {
  return (
    <div className="header">
      <HomePageHeader />
      <Popup />
      <HeaderIcons />
    </div>
  );
};
export default Header;
