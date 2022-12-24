import { useContext } from "react";
import { Context } from "../../context/Context";
import "../header/header-styles/Popup.css";

const cataData = [
  { who: "Guests" },
  { who: "Bedrooms" },
  { who: "Beds" },
  { who: "Bathrooms" },
];

const HousePopup = () => {
  const { amount, increment, decrement, handleReset } = useContext(Context);

  console.log("Amount is", amount[1]);
  return (
    <div className="who-pop-up-container">
      {cataData.map((cata, i) => {
        return (
          <div key={i} className="who-pop-up-cata">
            <div className="who-cata-container">
              <div className="age-cata">
                <h2 className="who"> {cata.who} </h2>
              </div>
              <div className="amount">
                <span
                  className={`minus ${
                    amount[i] === 0 ? "minus-below-zero" : ""
                  }`}
                >
                  <i
                    id={i}
                    onClick={decrement}
                    className={`fa-solid fa-minus ${
                      amount[i] === 0 ? "less-than-zero" : ""
                    }`}
                  ></i>
                </span>
                <span className="number"> {amount[i]} </span>
                <span className="plus">
                  <i
                    id={i}
                    onClick={increment}
                    className="fa-solid fa-plus"
                  ></i>
                </span>
              </div>
            </div>
            <div style={{ top: "-11rem" }} className="bottom-border"></div>
          </div>
        );
      })}
      <p onClick={handleReset} className="reset-btn">
        Reset
      </p>
    </div>
  );
};
export default HousePopup;
