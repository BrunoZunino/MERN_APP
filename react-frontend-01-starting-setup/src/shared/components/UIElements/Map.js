import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl'

import './Map.css';

const Map = props => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm96dW5pbm8iLCJhIjoiY2trcTZhaGp3MDRmYjJvcXR5bjF0OHZqZCJ9.ZtYDtHmrE_xyd34dqIeRQw';

  useEffect(() => {
    new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      height: 300,
      center: [ -56.16667, -34.86694],
      zoom: 5.5,
    });

  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return <div id='mapContainer' className={`map ${props.className}`} style={props.style}></div>
};

export default Map;