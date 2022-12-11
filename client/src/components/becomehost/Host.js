import { useContext, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Context } from "../../context/Context";

import { useNavigate } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

import { TbMinusVertical } from "react-icons/tb";

import { FaInfoCircle } from "react-icons/fa";

function Host() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName, lastName);
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[100px] bg-black">header</div>
      <div className="passenger-d-container ">
        <div className="py-[30px]">
          <div className="passenger-flight-details px-[20px] py-[20px] flex items-center justify-between border-[0.5px] hover:shadow-xl rounded-md">
            <div className="flex items-center gap-2">
              <p className="fs-[22px] text-[#647286] font-[700]">
                Flight details
              </p>
            </div>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className=" info-2 ">
          <p className="info-2-p1">i</p>
          <p className="info-2-p2">
            Please read the <span>Clarification Text </span> for more detailed
            information regarding the Processing of Personal Data.
          </p>
        </div>
        <br />
        <div className="passenger-d-para">
          <img
            className="p-d-img w-[138px] h-[21px]"
            src="https://www.turkishairlines.com/theme/img/miles-and-smiles-new-logo.png"
            alt="miles & smiles"
          />
          <p className="passenger-d-p">
            Miles&Smiles sign in provides you to save passenger details in your
            account and use them later. Moreover, Cash&Miles feature let you pay
            a part of your ticket with Miles and you can continue to earn Miles
            from your flight.
          </p>
          <button className="passenger-d-btn">Miles&Smiles Sign in</button>
        </div>
        <br />
        <div className="adult-passenger-d ">
          <img src="https://www.turkishairlines.com/theme/img/user-grey.png" />
          <p>Adult passenger details</p>
        </div>
        <div>
          <form className="first-form ">
            <div className="form-group col-md-4">
              <label for="inputState"></label>
              <select className="form-control">
                <option selected disabled>
                  Title
                </option>
                <option>Mr</option>
                <option>Mrs</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label for="firstname"></label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First / Middle name (As shown in ID)"
              />
            </div>
            <div className="form-group col-md-4">
              <label for="surname"></label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
                id="surname"
                placeholder="Surname (As shown in ID)"
              />
            </div>

            <div className="form-group">
              <label for="date"></label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Turkish citizen
                </label>
              </div>
            </div>
            <br />
            <div className="form-row">
              <div className="form-group col-md-4">
                <label for="inputState"></label>
                <select
                  className="form-control"
                  placeholder="Frequent flyer program"
                >
                  <option selected>Turkish Airlines - Miles&Smiles</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group col-md-4">
              <label for="TK"></label>
              <input
                type="text"
                className="form-control"
                placeholder="Frequent flyer number"
              />
            </div>
          </form>
          <hr className="hr" />
          <form className="second-form">
            <p className="second-form-p1"> Contact details</p>
            <div className="second-form-inputs">
              <div className="mb-3 col-md-4">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email address"
                />
                <div id="emailHelp" className="form-text"></div>
              </div>
              <div class="mb-3 col-md-4">
                <input
                  type="code"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Area code"
                />
              </div>
              <div class="mb-3 col-md-4">
                <input
                  type="phone"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div>
              <span className="second-f-span fw-bold py-[10px]">
                Get to know us
              </span>
              <p>
                By selecting the following communication channel(s) in
                accordance with the terms specified in the{" "}
                <span className="span-blue text-primary">Privacy Notice</span> I
                consent to be contacted via the channel(s) regarding products,
                services and opportunities offered by Turkish Airlines, its{" "}
                <span className="span-blue text-danger">
                  affiliates and partners
                </span>
                ; and that my personal data shared with Turkish Airlines for
                marketing and customer experience activities as described in the
                <span className="span-blue text-primary">
                  Personal Data Announcement
                </span>
                to be processed, used and transferred domestically and abroad
                for this purpose.
              </p>
            </div>{" "}
            <br />
            <div className="second-form-radio-btn flex text-dark fw-bold">
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I allow notification via SMS
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I allow notification via email
                </label>
              </div>
            </div>
          </form>
          <hr className="hr" />
          <br />
        </div>
        <br /> <br />
      </div>

      {/* //////////////////////////////////////////////////// */}

      {/* FOOTER */}

      {/* <div className="fixed bottom-0 w-screen">
        <div className="h-[88px] bg-[#232B38] w-full text-white flex items-center justify-center  ">
          <div className="flex items-center ">
            <div className="w-[426.66px] px-[15px]">
              <p className="text-[14.67px] font-[700] mb-[10px]">Departure</p>
              <div className="flex items-center gap-2 text-[12px] font-[500] ">
                <p>
                  {state?.selectedflightobject?.departureAirportCity.slice(
                    0,
                    3
                  )}
                  -{" "}
                  {state?.selectedflightobject?.arrivalAirportCity.slice(0, 3)}
                </p>
                <BsFillCircleFill className="w-[5.16px] h-[6px]" />
                <p>
                  {state?.firstDateDay?.slice(0, 3)}, {state?.firstDate}
                </p>
              </div>
              <div className="flex items-center text-[12px] gap-1 font-[500]">
                <div className="flex items-center gap-1">
                  <p>Departure</p>
                  <p>{state?.selectedflightobject?.departureTime}</p>
                </div>
                <TbMinusVertical />
                <div className="flex items-center gap-1">
                  <p>Arrival</p>
                  <p>{state?.selectedflightobject?.arrivalTime}</p>
                </div>
              </div>
            </div>
            <div className="w-[170.66px] flex">
              <div className="flex items-center w-[150.66px] ">
                <span className="w-[30px] h-[20px] rounded-sm border-[#A9A9A9] mr-[18px] border-[2px]"></span>
                <p className="text-[12px] font-[300] ">
                  <span className="text-[#E81932]">Hold the price</span> for 20
                  EUR and pay later.
                </p>
              </div>
              <FaInfoCircle className="w-[17.72px] h-[17px]" />
            </div>
            <div className="w-[256.68px] float-right ">
              <p className="text-[12px] font-[500] text-right">
                Total price for 1 passenger
              </p>
              <div className="flex items-center gap-2 justify-end">
                <div className="text-[12px] font-[500]">
                  <p className="h-[12px]">EUR</p>
                  <p>Euro</p>
                </div>
                <p className="text-[22px] font-[700]">
                  {state?.selectedPrice}.42
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: "firstLastName",
                  firstName: firstName,
                  lastName: lastName,
                });
                navigate("/seatselection");
              }}
              className="px-[15px] cursor-pointer"
            >
              <div className="bg-[#E81932] px-[12px] py-[6px] rounded-[4px] w-[140.66px] h-[68px] flex items-center justify-between text-white ">
                <p className="font-[700] text-[14px]">Continue</p>
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Host;
