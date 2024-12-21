import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const hotelLocations = [
  { id: 1, price: '$100', position: [51.505, -0.09] },
  { id: 2, price: '$150', position: [51.515, -0.1] },
  // Add more hotel locations as needed
];

const createCustomIcon = (price, isSelected, isVisited) => {
  const backgroundColor = isSelected ? 'blue' : isVisited ? 'gray' : 'white';
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
            <div class="marker-dot"">
              <div class="marker-content">
                <div class="marker-price" style="background-color: ${backgroundColor}">${price}</div>
                <div class="marker-triangle"></div>
              </div>
            </div>
          `,
    iconSize: [0, 0],
  });
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [visitedMarkers, setVisitedMarkers] = useState(new Set());

  const handleMarkerClick = (markerId) => {
    setSelectedMarker(markerId);
    setVisitedMarkers((prev) => new Set(prev).add(markerId));
    
  };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {hotelLocations.map((hotel) => {
        const isSelected = selectedMarker === hotel.id;
        const isVisited = visitedMarkers.has(hotel.id);
        const icon = createCustomIcon(hotel.price, isSelected, isVisited);

        return (
          <Marker
            key={hotel.id}
            position={hotel.position}
            icon={icon}
            eventHandlers={{
              click: () => handleMarkerClick(hotel.id),
            }}
          >
            {isSelected && (
              <Popup>
                <div>
                  <h3>Hotel Details</h3>
                  <p>Price: {hotel.price}</p>
                  {/* Add more details as needed */}
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;