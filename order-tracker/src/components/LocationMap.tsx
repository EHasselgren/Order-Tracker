// components/LocationMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the custom icon
const customIcon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ latitude, longitude, locationName }) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <MapContainer 
        center={[latitude, longitude]} 
        zoom={13} 
        style={{ height: '200px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            <div className="text-sm">
              <strong>{locationName}</strong><br />
              {latitude.toFixed(6)}, {longitude.toFixed(6)}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;