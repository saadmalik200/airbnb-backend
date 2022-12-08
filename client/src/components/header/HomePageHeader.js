import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./header-styles/HomePageHeader.css";
import Search from "./HomePageSearch";
import SearchExtension from "./SearchExtension";
import SearchCatagory from "./SearchCatagory";
import { useNavigate } from "react-router-dom";

const HomePageHeader = () => {
  const { discover, setDiscover, handleLogin, dispatch } = useContext(Context);
  const nav = useNavigate();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div
          onClick={() => {
            setDiscover((prev) => false);
            dispatch({ type: "change-active-icon" });
            nav("/home");
          }}
          className="logo-box"
        >
          <i className="fa-brands fa-airbnb"></i>
          <h3 className="logo-name">airbnb</h3>
        </div>
        {discover ? <SearchCatagory /> : <Search />}
        <div className="home-page-header-right">
          <span className="text-background">
            <h3 className="host-text">Become a host</h3>
          </span>
          <span className="globe-background">
            <i className="fa-solid fa-globe"></i>
          </span>
          <div onClick={handleLogin} className="bars-user">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>

      {discover ? <SearchExtension /> : ""}
    </nav>
  );
};
export default HomePageHeader;
