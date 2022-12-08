import { getDistance } from "geolib";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

const GeoData = ({ lat, lng }) => {
  const { dispatch } = useContext(Context);
  const [currGeoCoordinates, setcurrGeoCoordinates] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcurrGeoCoordinates([
        position?.coords?.latitude,
        position?.coords?.longitude,
      ]);
      dispatch({ type: "geoData", payload: currGeoCoordinates });
    });
  }, [currGeoCoordinates, lat, lng, dispatch]);

  useEffect(() => {
    const calculateDistance = () => {
      let dis = getDistance(
        {
          latitude: "" && currGeoCoordinates[0],
          longitude: "" && currGeoCoordinates[1],
        },
        {
          latitude: lat,
          longitude: lng,
        }
      );

      dispatch({ type: "distance", payload: (dis / 1000).toFixed(0) });
      // console.log(`${dis / 1000} KM`);
      // return `${dis / 1000} KM`;
      // console.log(currGeoCoordinates);
      // console.log(`${state?.localData[0]?.latlong[0]}`);
      // console.log(state.localData);
      //return dispatch({ type: "localData", payload: data });
    };

    calculateDistance();
  }, [currGeoCoordinates, lat, lng, dispatch]);
};

export default GeoData;
