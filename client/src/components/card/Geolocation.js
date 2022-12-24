import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const GeoData = ({ lat, lng }) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    function distance() {
      const lat2 = 52.520008;
      const lon2 = 13.404954;
      const p = 0.017453292519943295; // Math.PI / 180
      const c = Math.cos;
      const a =
        0.5 -
        c((lat2 - lat) * p) / 2 +
        (c(lat * p) * c(lat2 * p) * (1 - c((lon2 - lng) * p))) / 2;

      if (!lat && !lng) return;
      dispatch({
        type: "distance",
        payload: (12742 * Math.asin(Math.sqrt(a))).toFixed(0),
      });
      console.log(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    }

    distance();
  }, [lng]);
};

export default GeoData;
