import React, { useContext, useEffect } from "react";
import * as moment from "moment";
import { Context } from "../../../context/Context";

import {
  DatePicker,
  useDatePickGetter,
  useDatePickReset,
} from "@bcad1591/react-date-picker";

function FormCalender() {
  const { pickedDates } = useDatePickGetter();

  const { state, dispatch } = useContext(Context);

  const resetFunc = useDatePickReset();

  const startDate = pickedDates.firstPickedDate?.toString();
  const endDate = pickedDates.secondPickedDate?.toString();
  const calcDays = moment(state?.endDate).diff(state?.startDate, "days");

  console.log(calcDays);

  useEffect(() => {
    dispatch({
      type: "FORMDATE",
      first: startDate,
      second: endDate,
      calcDays: calcDays,
    });
  }, [endDate, calcDays, dispatch]);

  // console.log(startDate, endDate);

  return (
    <div className="relative">
      <div>
        <div
          style={{ zIndex: 999 }}
          className="text-[22px] absolute bottom-[1.7rem] left-[5rem] font-[500]"
        >
          Selected Days {calcDays}
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

      <button
        className="absolute bottom-[2rem] bg-black text-white px-[16px] font-bold rounded-full py-[8px]  right-[10rem] "
        type="button"
        onClick={() => dispatch({ type: "formCalender" })}
      >
        Close
      </button>
    </div>
  );
}

export default FormCalender;
