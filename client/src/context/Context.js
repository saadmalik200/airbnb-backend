import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    localData: [],
    apiData: [],
    distance: [],
    geoData: [],
    firstDate: "",
    secondDate: "",
    hostfirstDate: "",
    hostsecondDate: "",
    dateDiff: 0,
    startDate: "",
    endDate: "",
    formCalender: false,
    calcDays: 0,
    filteredData: {},
    activeIconName: "",
    totalGuests: 0,
    user: {},
    users: [],
    houses: [],
    housePrice: 56,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "sendData":
        // console.log("action", action.payload);
        return { ...state, apiData: action.payload };

      case "localData":
        return { ...state, localData: action.payload };

      case "distance":
        //console.log("action", action.payload);
        return { ...state, distance: [...state.distance, action.payload] };

      case "geoData":
        return { ...state, geoData: action.payload };
      case "date":
        return {
          ...state,
          firstDate: action.first,
          secondDate: action.second,
          dateDiff: action.dateDiff,
        };
      case "FORMDATE":
        return {
          ...state,
          startDate: action.first,
          endDate: action.second,
          calcDays: action.calcDays,
        };

      case "housePrice":
        return { ...state, housePrice: action.payload };

      case "pricePlus":
        return { ...state, housePrice: state.housePrice + 1 };

      case "priceMinus":
        return { ...state, housePrice: state.housePrice - 1 };
      case "formCalender":
        return { ...state, formCalender: !state.formCalender };

      case "FILTERED-DATA":
        return {
          ...state,
          filteredData: action.payload,
          calcDays: action.calcDays,
          totalGuests: action.totalGuests,
        };
      case "active-icon-name":
        return { ...state, activeIconName: action.payload };
      case "change-active-icon":
        return { ...state, activeIconName: "" };

      case "ActiveUser":
        console.log("active user", state.user);
        return { ...state, user: action.payload };

      case "HouseList":
        return { ...state, houses: [...action.payload] };

      case "addHouseList":
        return { ...state, houses: [...state.houses, ...action.payload] };

      case "hostfirstSecondDate":
        return {
          ...state,
          hostfirstDate: action.hostfirstDate,
          hostsecondDate: action.hostsecondDate,
        };
      case "addToWishlist":
        return {
          ...state,
          user: {
            ...state.user,
            wishlist: [...state.user.wishlist, action.payload],
          },
        };

      case "deleteFromWishlist":
        return {
          ...state,
          user: {
            ...state.user,
            wishlist: [...action.payload],
          },
        };

      case "logout":
        console.log("logout", state.user);
        return { ...state, user: {} };
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [discover, setDiscover] = useState(false);

  const handleSearchClick = () => {
    setDiscover((prev) => !prev);
  };

  // State for adding guests
  const [amount, setAmount] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  const increment = (e) => {
    const { id } = e.target;
    setAmount((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (e) => {
    const { id } = e.target;
    if (amount[id] > 0) {
      setAmount((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const handleReset = () => {
    setAmount({
      guests: 0,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
    });
  };

  // State for the request pop up
  const [popup, setPopup] = useState({
    where: false,
    who: false,
    checkIn: false,
    checkOut: false,
  });

  const handleWhere = () => {
    setPopup((prev) => ({
      where: !popup.where,
      who: false,
      checkIn: false,
      checkOut: false,
    }));
  };

  const handleWho = () => {
    setPopup((prev) => ({
      where: false,
      who: !popup.who,
      checkIn: false,
      checkOut: false,
    }));
  };

  const handleCheckIn = () => {
    setPopup((prev) => ({
      where: false,
      who: false,
      checkIn: !popup.checkIn,
      checkOut: false,
    }));
  };

  const handleCheckOut = () => {
    setPopup((prev) => ({
      where: false,
      who: false,
      checkIn: false,
      checkOut: !popup.checkOut,
    }));
  };

  //state for login
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev) => !prev);

    //navigate("/home/login");
  };
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        discover,
        setDiscover,
        handleSearchClick,
        amount,
        increment,
        decrement,
        popup,
        setPopup,
        handleWhere,
        handleWho,
        handleCheckIn,
        handleCheckOut,
        handleReset,
        login,
        setLogin,
        handleLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
