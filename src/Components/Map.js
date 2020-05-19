import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const mapStyles = {
  width: '100%',
  height: '94%',
  zIndex: '1',
 
};

export class MapContainer extends Component {
  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={19}
        style={mapStyles}
        initialCenter={{
         lat: 50.9087,
         lng: -1.4012
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDwXjehjDc_LTRq8VF7lSqIFMXYgA5fkxw"
})(MapContainer);