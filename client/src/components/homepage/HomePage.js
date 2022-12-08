import React, { useContext } from "react";
import { Context } from "../../context/Context";
import CardContainer from "../card/CardContainer";
import Header from "../header/Header";
import LoginForm from "../login/LoginForm";

const HomePage = () => {
  const { login } = useContext(Context);
  return (
    <div>
      {!login && <Header />}
      {login && <LoginForm />}
      <CardContainer login={login} />
    </div>
  );
};

export default HomePage;
