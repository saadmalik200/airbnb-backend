import { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

import { Context } from "../../context/Context";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import HousePopup from "./HousePopup";

import { IoIosArrowDown } from "react-icons/io";

function Host() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName, lastName);
  const { state, dispatch } = useContext(Context);

  const [showHomePopup, setShowHomePopup] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[100px] bg-black">header</div>
      <div className="passenger-d-container ">
        <div className="py-[30px]">
          <div className="passenger-flight-details px-[20px] py-[20px] flex items-center justify-between border-[0.5px] hover:shadow-xl rounded-md">
            <div className="flex items-center gap-2">
              <p className="text-[36px] text-red-500 font-[700]">
                Become a Host
              </p>
            </div>
          </div>
        </div>
        <div className="adult-passenger-d items-center gap-4">
          <FaUserAlt />
          <p>Personal details</p>
        </div>
        <div>
          <form className="first-form ">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Title
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Mr. / Mrs. / Ms."
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  First Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your first name "
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Last Name
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your last name "
                />
              </div>
            </div>

            <div className="flex justify-between mt-[2.5rem]">
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Address
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your Address"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  City
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your city name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Zip Code
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your Zip Code"
                />
              </div>
            </div>
            <div className="flex gap-[4rem] mt-[2.5rem]">
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="firstname"
                >
                  Phone Number
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control w-[30rem] rounded-full"
                  id="firstname"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </form>

          <br />
        </div>

        <hr className="" />
        <br />

        <div className="adult-passenger-d items-center gap-4">
          <BiBuildingHouse className="text-[2.5rem]" />
          <p>House details</p>
        </div>
        <div>
          <form className="first-form ">
            <div className="flex justify-between items-center ">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                Which of the following best describes your place?
              </label>
              <select className="w-[35rem] py-[15px] pl-[16px]   rounded-full">
                <option selected disabled className="">
                  Select property type:
                </option>
                <option>House</option>
                <option>Apartment</option>
                <option>Cabin</option>
                <option>OMG</option>
                <option>Amazing View</option>
                <option>Aframe</option>
                <option>House Boat</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-[3rem]">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                What type of place will guests have?
              </label>
              <select className="w-[35rem] py-[15px] pl-[16px]   rounded-full">
                <option selected disabled className="">
                  Select type of place:
                </option>
                <option>An Entire Place</option>
                <option>A Private Place</option>
                <option>A Shared Room</option>
              </select>
            </div>

            <div className="flex justify-between items-center mt-[3rem] relative">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                Share some basics about your place?
              </label>

              <div
                onClick={() => setShowHomePopup(!showHomePopup)}
                className="flex justify-between w-[35rem] z-10 py-[15px] pl-[16px] bg-[#EFEFEF] leading-none  rounded-full"
              >
                Select House Info
                <p>
                  <IoIosArrowDown className="text-[1.5rem] font-[900]" />
                </p>
              </div>

              {showHomePopup && (
                <div className="absolute top-[5rem] z-50 right-[-3.5rem]">
                  <HousePopup />
                </div>
              )}
            </div>

            <div className="flex flex-col mt-[2.5rem]">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                Now let's give your house a title.
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control w-full rounded-full"
                id="firstname"
                placeholder="Have fun with it. You can always change it later."
              />
            </div>

            <div className="flex flex-col mt-[2.5rem]">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                Create your description.
              </label>

              <textarea
                className="border-2 border-black py-[10px] px-[16px] rounded-2xl"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <div className="flex justify-between items-center mt-[3rem]">
              <label
                className="font-bold mb-[.5rem] ml-[.5rem]"
                for="firstname"
              >
                Are you a Superhost?
              </label>
              <select className="w-[35rem] py-[15px] pl-[16px]   rounded-full">
                <option selected disabled className="">
                  Select an option:
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </form>

          <br />
        </div>
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
