import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./header-styles/HomePageHeader.css";
import Search from "./HomePageSearch";
import SearchExtension from "./SearchExtension";
import SearchCatagory from "./SearchCatagory";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const HomePageHeader = () => {
  const { discover, setDiscover, dispatch, state } = useContext(Context);
  const nav = useNavigate();
  const handleRegister = () => {
    if (!state?.user?._id) {
      nav("/home/register");
    } else {
      alert("You are logged in!!");
    }
  };

  const handleHost = () => {
    if (!state?.user?._id) {
      alert("Please Register/Log in");
    } else nav("/host");
  };

  const handleLogout = async () => {
    dispatch({ type: "logout" });
    alert("you have logged out successfully");
    nav("/home");
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
        {discover ? <SearchCatagory /> : <Search />}
        <div className="home-page-header-right">
          <span onClick={handleHost} className="bars-user">
            <h3 className="host-text">Become a host</h3>
          </span>
          <span className="globe-background">
            {!state?.user?._id ? (
              <i className="fa-solid fa-globe"></i>
            ) : (
              <AiFillHeart
                onClick={() => nav("/wishlist")}
                className="text-[20px] fill-red-600"
              />
            )}
          </span>
          <div onClick={handleRegister} className="bars-user">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="globe-background cursor-pointer text-[24px] ">
            {!state?.user?._id ? (
              <BiLogIn
                className="fill-red-600"
                onClick={() => nav("/home/login")}
              />
            ) : (
              <BiLogOut className="fill-red-600" onClick={handleLogout} />
            )}
          </div>
        </div>
      </div>

      {discover ? <SearchExtension /> : ""}
    </nav>
  );
};
export default HomePageHeader;
