import "./header-styles/Popup.css";
import { regionalImages } from "../localdata/RegionalImage";

const WherePopup = () => {
  return (
    <div>
      <div className="where-pop-up-box">
        <h1 className="where-pop-up-heading">Search by region</h1>
        <div className="where-pop-up-image-container">
          {regionalImages.map((img, i) => {
            return (
              <div key={i} className="where-pop-up-img-box">
                <img
                  className="where-pop-up-img"
                  src={img.url}
                  alt="world map"
                />
                <p className="where-pop-up-text"> {img.name} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WherePopup;
