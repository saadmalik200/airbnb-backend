import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { icons } from "../localdata/Icons";

const HeaderIcons = () => {
  const { dispatch } = useContext(Context);

  const sliderLeft = () => {
    const slider = document.querySelector(".icons-container");
    slider.scrollLeft -= 500;
  };

  const sliderRight = () => {
    const slider = document.querySelector(".icons-container");
    slider.scrollLeft += 500;
  };

  const handleIconClick = async (iconName) => {
    console.log("iconName", iconName);
    dispatch({ type: "active-icon-name", payload: iconName });
    const response = await axios.post("/houses/search", { housecat: iconName });
    if (response.data.success) {
      dispatch({
        type: "HouseList",
        payload: response.data.houses,
      });
    }
  };

  return (
    <div className="icons-container">
      <i onClick={sliderLeft} class="fa-solid fa-chevron-left"></i>
      {icons.map((icon, i) => {
        return (
          <div
            onClick={() => {
              return icon.id === i ? handleIconClick(icon.name) : "";
            }}
            className="icon-box"
          >
            <img className="icon" src={icon.icon} alt="icons" />
            <p className="icon-title"> {icon.name} </p>
          </div>
        );
      })}
      <i onClick={sliderRight} class="fa-solid fa-chevron-right"></i>
    </div>
  );
};
export default HeaderIcons;
