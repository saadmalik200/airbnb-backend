import React, { useState, useMemo, useContext } from "react";
import { GrClose } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import CardContainer from "../card/CardContainer";
import axios from "axios";

//import Select from "@mui/material/Select";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 500,
      display: "flex",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
}

const RegisterForm = () => {
  //const { handleLogin, login } = useContext(Context);

  const [data, setData] = useState({ phone: "", password: "" });
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };

  const handleRegister = async () => {
    const response = await axios.post("/users/register", data);
    console.log("response from register", response);

    if (response.data.success) {
      navigate("/home");
      alert("You have successfully registered");
    }
  };
  return (
    <>
      <div
        style={{ zIndex: 20 }}
        className=" fixed w-full h-screen bg-black bg-opacity-75"
      >
        <div className="flex justify-center items-center h-screen">
          <div className="  bg-white w-[568px] h-[682px] border-2 rounded-2xl">
            <div className="h-[54px] flex border-b-2 justify-between px-10 items-center">
              <div
                onClick={handleClose}
                className=" flex justify-center items-center w-[36px] h-[36px] rounded-full hover:bg-gray-200"
              >
                <GrClose />
              </div>
              <div className="w-[160px] font-[600]">Register</div>
              <div></div>
            </div>
            <div className="w-[568] h-[353px] px-[24px]  text-[14px]">
              <div className="text-[24px] font-[600] mt-[32px] mb-[16px]">
                Welcome to Airbnb
              </div>
              <div className="border-2  border-b-0 w-full h-[56px] flex flex-row items-center rounded-t-2xl">
                <CountrySelector />
              </div>
              <div className="border-2 w-full h-[56px]  flex items-center p-5">
                <input
                  type="number"
                  className="w-full outline-none"
                  placeholder="Phone number"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  value={data.phone}
                />
              </div>
              <div className="border-2  border-t-0 w-full h-[56px] rounded-b-2xl flex items-center p-5 ">
                <input
                  className="w-full outline-none"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  value={data.password}
                />
              </div>
              <div className="mt-[8px] text-[12px]">
                We’ll call or text you to confirm your number. Standard message
                and data rates apply.{" "}
                <span
                  style={{ textDecoration: "underline", fontWeight: "500" }}
                >
                  Privacy Policy
                </span>
              </div>
              <div
                style={{
                  background:
                    "radial-gradient(circle, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%)",
                }}
                className="w-full h-[48px] mt-[16px] mb-[24px] rounded-2xl text-white flex justify-center items-center font-[500] cursor-pointer"
                onClick={handleRegister}
              >
                Continue
              </div>
              <hr />
              <div className="w-[520px] h-[240px] mt-[20px]">
                <div className="w-[520px] h-[48px] text-[14px] mb-[16px] flex justify-between border-2 rounded-2xl items-center font-[500] text-slate-800 px-10">
                  <div>
                    <FaFacebook
                      style={{ fill: "rgb(45, 85, 255)", fontSize: "2rem" }}
                    />
                  </div>{" "}
                  <div>Continue with Facebook</div>
                  <div></div>
                </div>

                <div className="w-[520px] h-[48px] text-[14px] mb-[16px] flex justify-between border-2 rounded-2xl items-center font-[500] text-slate-800 px-10">
                  <div>
                    <FcGoogle
                      style={{ fill: "rgb(45, 85, 255)", fontSize: "2rem" }}
                    />
                  </div>{" "}
                  <div>Continue with Google</div>
                  <div></div>
                </div>

                {/*  <div className="w-[520px] h-[48px] text-[14px] mb-[16px] flex justify-between border-2 rounded-2xl items-center font-[500] text-slate-800 px-10">
                  <div>
                    <AiFillApple
                      style={{ fill: "black", fontSize: "2.5rem" }}
                    />
                  </div>{" "}
                  <div>Continue with Apple</div>
                  <div></div>
                </div> */}

                <div className="w-[520px] h-[48px] text-[14px] mb-[16px] flex justify-between border-2 rounded-2xl items-center font-[500] text-slate-800 px-10">
                  <div>
                    <TfiEmail style={{ fontSize: "2rem" }} />
                  </div>{" "}
                  <div>Continue with email</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
