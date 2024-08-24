import "../styles/prices.css"
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono personalizado para el marcador
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const LocationMarker = ({ setPosition }) => {
  const [position, setMarkerPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition(e.latlng);
      setPosition([lat, lng]);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}></Marker>
  );
};

export const MapPicker = ({ initialPosition = [-34.6076, -58.9529], zoomLevel = 13, onLocationSelect }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSetPosition = (position) => {
    setSelectedPosition(position);
    if (onLocationSelect) {
      onLocationSelect(position);
    }
  };

  return (
    <div className='map-container'>
      <MapContainer center={initialPosition} zoom={zoomLevel} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker setPosition={handleSetPosition} />
      </MapContainer>
      {selectedPosition && (
        <div className='coordinateP'>
          <p>Coordenadas seleccionadas: {selectedPosition[0]}, {selectedPosition[1]}</p>
        </div>
      )}
    </div>
  )
};
