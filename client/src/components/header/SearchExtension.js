import { useContext } from "react";
import { Context } from "../../context/Context";
import "./header-styles/SearchExtension.css";

const SearchExtension = () => {
  const {
    state,
    popup,
    handleWhere,
    handleWho,
    handleCheckIn,
    handleCheckOut,
    amount,
  } = useContext(Context);

  const { firstDate, secondDate } = state;

  const totalAmount = amount[0] + amount[1] + amount[2] + amount[3];

  return (
    <div
      className={`search-extension-container ${
        popup.where || popup.who || popup.checkIn || popup.checkOut
          ? "search-extension-container-onclick"
          : ""
      } `}
    >
      <div
        onClick={handleWhere}
        className={`request-box where ${
          popup.where ? "request-box-onclick" : ""
        } ${popup.where ? "where-onclick" : ""} `}
      >
        <p className="request">Where</p>
        <input
          className={`search-input  ${
            popup.who || popup.checkIn || popup.checkOut
              ? "search-input-on-any-click"
              : ""
          } ${popup.where ? "search-input-onclick" : ""} `}
          type="text"
          placeholder="Search destinations"
        />
      </div>
      <div
        onClick={handleCheckIn}
        className={`request-box ${popup.checkIn ? "request-box-onclick" : ""} `}
      >
        <p className="request">Check in</p>
        <span className="request-info">
          {" "}
          {firstDate ? firstDate : "Add dates"}
        </span>
      </div>
      <div
        onClick={handleCheckOut}
        className={`request-box ${popup.checkOut ? "request-box-onclick" : ""}`}
      >
        <p className="request">Check out</p>
        <span className="request-info">
          {secondDate ? secondDate : "Add dates"}
        </span>
      </div>
      <div
        onClick={handleWho}
        className={`request-box request-icon-box ${
          popup.who ? "request-box-onclick " : ""
        } `}
      >
        <div className="who">
          <p className="request">Who</p>
          {totalAmount === 0 ? (
            <span className="request-info">Add guets</span>
          ) : (
            <p>
              {totalAmount} {totalAmount > 1 ? " Guests" : "Guest"}
            </p>
          )}
        </div>

        <span className="search-extension-icon-box">
          <i className="fa-solid fa-magnifying-glass search-extension-icon"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchExtension;
