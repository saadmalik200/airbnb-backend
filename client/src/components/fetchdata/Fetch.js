import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const Fetch = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const data = await res.json();
      data.meals.forEach(
        (item) => (item.price = Math.floor(Math.random() * 1000))
      );
      console.log(data.meals);
      dispatch({ type: "sendData", payload: data });
    };

    getData();
  }, []);

  return <div>Fetch</div>;
};

export default Fetch;
