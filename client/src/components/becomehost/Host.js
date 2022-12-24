import { useContext, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import axios from "axios";
import { Context } from "../../context/Context";
import { BiBuildingHouse } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import HousePopup from "./HousePopup";

import { IoIosArrowDown } from "react-icons/io";
import HostHeader from "../becomehost/HostHeader";
import CountryCode from "./CountryCode";
import DatePicker from "./DatePicker";

function Host() {
  const { state, amount, dispatch } = useContext(Context);
  const [houseData, setHouseData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    email: "",
    phone: 0,
    housecat: "",
    housetype: "",
    housetitle: "",
    description: "",
    price: 0,
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    guests: 0,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    firstDate: "",
    secondDate: "",
  });

  const [showHomePopup, setShowHomePopup] = useState(false);
  const [housePrice, setHousePrice] = useState(56);
  const navigate = useNavigate();

  console.log("from host page", state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(houseData);
    const response = await axios.post("/houses/register", houseData);
    console.log(response);
  };

  useEffect(() => {
    setHouseData({
      ...houseData,
      price: state?.housePrice,
      guests: amount[0],
      bedrooms: amount[1],
      beds: amount[2],
      bathrooms: amount[3],
    });
  }, [state, amount]);

  const handlePrice = (e) => {
    // setHousePrice(+e.target.value);
    dispatch({ type: "housePrice", payload: housePrice });

    setHouseData({
      ...houseData,
      price: state?.housePrice,
    });
  };

  console.log("State house price", state?.housePrice);
  console.log("House Data Price", houseData.price);
  return (
    <div>
      <div className="h-[100px]">
        <HostHeader />
      </div>
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
        <form onSubmit={handleSubmit}>
          <div className="adult-passenger-d items-center gap-4">
            <FaUserAlt />
            <p>Personal details</p>
          </div>
          <div>
            <div className="first-form ">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="title"
                  >
                    Title
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, title: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="title"
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
                    onChange={(e) =>
                      setHouseData({ ...houseData, firstname: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="firstname"
                    placeholder="Enter your first name "
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, lastname: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="lastname"
                    placeholder="Enter your last name "
                  />
                </div>
              </div>

              <div className="flex justify-between mt-[2.5rem]">
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, address: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="address"
                    placeholder="Enter your Address"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-bold mb-[.5rem] ml-[.5rem]" for="city">
                    City
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, city: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="city"
                    placeholder="Enter your city name"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="zipcode"
                  >
                    Zip Code
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, zipcode: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="zipcode"
                    placeholder="Enter your Zip Code"
                  />
                </div>
              </div>
              <div className="flex gap-[4rem] mt-[2.5rem]">
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="country"
                  >
                    Country
                  </label>
                  {/*  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, country: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="country"
                    placeholder="Enter your city name"
                  /> */}

                  <CountryCode
                    setHouseData={setHouseData}
                    houseData={houseData}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({ ...houseData, email: e.target.value })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={(e) =>
                      setHouseData({
                        ...houseData,
                        phone: +e.target.value,
                      })
                    }
                    type="text"
                    className="form-control w-[30rem] rounded-full"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            <br />
          </div>

          <hr />
          <br />

          <div className="adult-passenger-d items-center gap-4">
            <BiBuildingHouse className="text-[2.5rem]" />
            <p>House details</p>
          </div>
          <div>
            <div className="first-form ">
              <div className="flex justify-between items-center ">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="housecat"
                >
                  Which of the following best describes your place?
                </label>
                <select
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      housecat: e.target.value,
                    })
                  }
                  className="w-[35rem] py-[15px] pl-[16px]   rounded-full"
                >
                  <option selected disabled className="">
                    Select property type:
                  </option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="cabins">Cabin</option>
                  <option value="OMG!">OMG</option>
                  <option value="Amazing views">Amazing View</option>
                  <option value="A-frame">Aframe</option>
                  <option value="lakefront">Lake Front</option>
                </select>
              </div>

              <div className="flex justify-between items-center mt-[3rem]">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="housetype"
                >
                  What type of place will guests have?
                </label>
                <select
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      housetype: e.target.value,
                    })
                  }
                  className="w-[35rem] py-[15px] pl-[16px]   rounded-full"
                >
                  <option selected disabled className="">
                    Select type of place:
                  </option>
                  <option value="An Entire Place">An Entire Place</option>
                  <option value="A Private Place">A Private Place</option>
                  <option value="A Shared Room">A Shared Room</option>
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
                  for="housetitle"
                >
                  Now let's give your house a title.
                </label>
                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      housetitle: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="housetitle"
                  placeholder="Have fun with it. You can always change it later."
                />
              </div>

              <div className="flex flex-col mt-[2.5rem]">
                <label
                  className="font-bold mb-[.5rem] ml-[.5rem]"
                  for="description"
                >
                  Create your description.
                </label>

                <textarea
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      description: e.target.value,
                    })
                  }
                  className="border-2 border-black py-[10px] px-[16px] rounded-2xl"
                  name=""
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className="flex flex-col mt-[2.5rem]">
                <label className="font-bold mb-[.5rem] ml-[.5rem]" for="img1">
                  Uplaod some images of your house
                </label>
                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      img1: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="img1"
                  placeholder="Add first image"
                />
                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      img2: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="img2"
                  placeholder="Add second image"
                />

                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      img3: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="img3"
                  placeholder="Add third image"
                />

                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      img4: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="img4"
                  placeholder="Add fourth image"
                />

                <input
                  onChange={(e) =>
                    setHouseData({
                      ...houseData,
                      img5: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control w-full rounded-full"
                  id="img5"
                  placeholder="Add fifth image"
                />
              </div>

              <div className="flex flex-col  mt-[3rem]">
                <div className="flex justify-between items-center">
                  <label
                    className="font-bold mb-[.5rem] ml-[.5rem]"
                    for="superhost"
                  >
                    Are you a Superhost?
                  </label>
                  <select
                    onChange={(e) =>
                      setHouseData({
                        ...houseData,
                        superhost: e.target.value,
                      })
                    }
                    className="w-[35rem] py-[15px] pl-[16px]   rounded-full"
                  >
                    <option selected disabled className="">
                      Select an option:
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
                <div className="mt-5  flex justify-between items-center">
                  <label className="font-bold mb-[.5rem] ml-[.5rem]" for="">
                    From when is your Apartment available?
                  </label>
                  <DatePicker />
                </div>
              </div>
              <br />
              <hr />

              <div className="mt-[2.5rem] ">
                <div>
                  <div>
                    <h1 className="text-[32px] font-[500] text-[black] mb-[12px]">
                      Now, set your price
                    </h1>
                    <p className="text-[18px] text-center">
                      You can change it anytime
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 bg-[#EFEFEF] w-[630px] h-[200px] border-2 border-gray-400 rounded-2xl mx-auto mt-[2rem]">
                    <div className="flex items-center justify-evenly w-full">
                      <div
                        // onClick={() => setHousePrice((prev) => prev - 1)}
                        onClick={() => dispatch({ type: "priceMinus" })}
                        className="flex cursor-pointer items-center justify-center h-[48px] w-[48px] rounded-full border-2 text-black bg-white border-gray-400"
                      >
                        <p className="text-[3rem]">-</p>
                      </div>
                      <input
                        // value={`€ ${housePrice}`}
                        value={state?.housePrice}
                        onChange={handlePrice}
                        className="text-[48px] font-[500] text-black text-center w-[412px] h-[80px] bg-white border-2 border-gray-400 rounded-2xl"
                      />

                      <div
                        // onClick={() => setHousePrice((prev) => prev + 1)}
                        onClick={() => dispatch({ type: "pricePlus" })}
                        className="cursor-pointer flex items-center justify-center h-[48px] w-[48px] rounded-full border-2 text-black bg-white border-gray-400"
                      >
                        <p className="text-[3rem]">+</p>
                      </div>
                    </div>
                    <p>per night</p>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </div>
          <div className="mt-5  flex justify-between px-10">
            <button
              className="bg-slate-400 rounded-2xl w-[70px] h-[40px] hover:bg-slate-500"
              type="submit"
            >
              Back
            </button>
            <button
              className="bg-slate-400 rounded-2xl w-[70px] h-[40px]  hover:bg-slate-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Host;
