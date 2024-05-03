import React, { useEffect, useState } from 'react';

const Map = () => {
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const geolocation = navigator.geolocation;
      const handleSuccess = (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      };

      const handleError = (error) => {
        console.error('Error getting location:', error);
      };

      geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  }, []);

  useEffect(() => {
    if (position && !map) {
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: position,
          zoom: 15,
        });
        const marker = new window.google.maps.Marker({
          position,
          map,
          title: 'Your location',
        });
        setMap(map);
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8IBwUIhJrAvBZv8-8yXSYj8A7FeetZds&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [position, map]);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map;