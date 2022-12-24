import "./header-styles/Calander.css";
import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";
import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import * as moment from "moment";

const Calander = () => {
  const { pickedDates } = useDatePickGetter();
  const { state, dispatch } = useContext(Context);

  const resetFunc = useDatePickReset();

  const firstDate = pickedDates.firstPickedDate?.toString().slice(4, 10);
  const secondDate = pickedDates.secondPickedDate?.toString().slice(4, 10);

  const dateDiff = moment(state.secondDate).diff(state.firstDate, "days");

  console.log(dateDiff);

  useEffect(() => {
    dispatch({
      type: "date",
      first: firstDate,
      second: secondDate,
      dateDiff: dateDiff,
    });
  }, [secondDate]);

  return (
    <div className="calander-container">
      <div>
        <div
          style={{ zIndex: 999 }}
          className="text-[22px] absolute bottom-[1.7rem] left-[5rem] font-[500]"
        >
          Selected Days {dateDiff}
        </div>
      </div>
      <DatePicker className="p-0" disablePreviousDays />
      <button
        className="absolute bottom-[2.5rem] right-[20rem]"
        type="button"
        style={{ textDecoration: "underline" }}
        onClick={resetFunc}
      >
        Clear
      </button>
    </div>
  );
};
export default Calander;
