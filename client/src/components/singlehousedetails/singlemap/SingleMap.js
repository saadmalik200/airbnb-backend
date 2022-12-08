import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MyMap({ filteredHome }) {
  return (
    <Map
      height={450}
      defaultCenter={[+filteredHome?.latlong[0], +filteredHome?.latlong[1]]}
      defaultZoom={16}
      width={1120}
    >
      <ZoomControl />
      <Marker
        width={50}
        anchor={[+filteredHome?.latlong[0], +filteredHome?.latlong[1]]}
      />
    </Map>
  );
}
