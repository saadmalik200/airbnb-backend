import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import Header from "../header/Header";
import ImageContainer from "./imagebox/ImagesContainer";
import NameReviewHeader from "./top-name-review/NameReviewHeader";
import RoomGuestInfo from "./roomguestinfo/RoomGuestInfo";
import Form from "./form/Form";
import SelfCheckAirCover from "./selfcheckinair/SelfCheckAirCover";
import WhereSleep from "./selfcheckinair/WhereSleep";
import LoginForm from "../login/LoginForm";
import PlaceOffers from "./selfcheckinair/PlaceOffers";
import SingleMap from "./singlemap/SingleMap";
import Reviews from "./reviews/Reviews";
import Footer from "./footer/Footer";
const SingleHouseDetails = () => {
  const { state, login } = useContext(Context);

  const { singlehome } = useParams();

  const filteredHome = state?.localData?.filter(
    (item) => +item.id === +singlehome
  )[0];

  return (
    <div>
      <Header />
      <NameReviewHeader filteredHome={filteredHome} />
      <ImageContainer filteredHome={filteredHome} />
      <div className="flex justify-between w-[1120px] mx-auto relative">
        <div>
          <RoomGuestInfo filteredHome={filteredHome} />
          <SelfCheckAirCover filteredHome={filteredHome} />
          <WhereSleep />
          <PlaceOffers />
          <Reviews filteredHome={filteredHome} />
          <SingleMap filteredHome={filteredHome} />
          <Footer filteredHome={filteredHome} />
        </div>
        <Form filteredHome={filteredHome} />
      </div>
      {login && <LoginForm />}
    </div>
  );
};

export default SingleHouseDetails;
