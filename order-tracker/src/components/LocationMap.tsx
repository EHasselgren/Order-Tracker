import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ICON_URL = '/marker-icon.png';
const SHADOW_URL = '/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: ICON_URL,
  shadowUrl: SHADOW_URL,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ latitude, longitude, locationName }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  if (!latitude || !longitude) {
    return <div className="rounded-lg overflow-hidden border border-gray-200 h-[200px] bg-gray-100 flex items-center justify-center">
      <p className="text-gray-500">Location coordinates not available</p>
    </div>;
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <MapContainer
        key={`${latitude}-${longitude}`}
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: '200px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
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