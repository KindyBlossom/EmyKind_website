import React  from 'react';

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  
  withProps({
    googleMapURL: process.env.REACT_APP_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 5.989413, lng: 6.98578 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 5.989413, lng: 6.98578 }} />}


  </GoogleMap>
  
);
console.log(process.env.REACT_APP_API_URL)
console.log(process.env.REACT_APP_API_KEY)
console.log(process.env.REACT_APP_API_KEY)
console.log(process.env.REACT_APP_API_KEY)

export default MyMapComponent;