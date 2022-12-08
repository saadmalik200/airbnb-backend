import { DatePickerProvider } from "@bcad1591/react-date-picker";

import { useContext } from "react";
import { Context } from "../../context/Context";
import "./header-styles/Popup.css";
import WherePopup from "./WherePopup";
import WhoPopup from "./WhoPopup";
import Calander from "./Calander";

const Popup = () => {
  const { popup } = useContext(Context);

  return (
    <div className="pop-up">
      {popup.where ? <WherePopup /> : ""}
      {popup.who ? <WhoPopup /> : ""}
      {popup.checkIn || popup.checkOut ? (
        <DatePickerProvider>
          <Calander />
        </DatePickerProvider>
      ) : (
        ""
      )}
    </div>
  );
};
export default Popup;
