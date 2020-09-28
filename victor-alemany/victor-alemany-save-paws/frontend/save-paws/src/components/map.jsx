import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../css/map.scss';
const Pointer = ()=><img src="https://www.flaticon.com/svg/static/icons/svg/1076/1076928.svg" alt="pointer" style={{width:'30px', height: '30px'}}></img>

function Map (props){

return (

<div style={{ height: '250px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBjjTqoHJURjmtJB4NUYmwZlFD2oFGSDA0'}}
          defaultCenter={{lat: props.latitude, lng: props.longitude}}
          defaultZoom={13}
        >

          <Pointer lat={props.latitude} lng={props.longitude} />
        </GoogleMapReact>
      </div>
    )
}

export default Map;