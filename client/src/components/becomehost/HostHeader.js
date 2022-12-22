import { useContext, useState } from "react";
import { Context } from "../../context/Context";

import "../header/header-styles/HomePageHeader.css";
// import Search from "./HomePageSearch";
// import SearchExtension from "./SearchExtension";
// import SearchCatagory from "./SearchCatagory";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const HomePageHeader = () => {
  const { discover, setDiscover, dispatch, state } = useContext(Context);
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/home/register");
  };

  const handleHost = () => {
    if (!state?.user?._id) {
      nav("/home/login");
    } else nav("/host");
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
    nav("/home");
    alert("you are sucessfully logged out");
  };

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

        <div className="home-page-header-right">
          {!state.user._id && (
            <span onClick={handleHost} className="text-background">
              <h3 className="host-text">Become a host</h3>
            </span>
          )}
          <span className="globe-background">
            <i className="fa-solid fa-globe"></i>
          </span>
          <div onClick={handleLogin} className="bars-user">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-user"></i>
          </div>

          {state?.user?._id && (
            <div
              className="globe-background cursor-pointer text-[22px] "
              onClick={handleLogout}
            >
              <BiLogOut />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default HomePageHeader;
