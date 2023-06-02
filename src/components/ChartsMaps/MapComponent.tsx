import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import { getCountriesData } from './APIs';
import { LatLngExpression } from 'leaflet';

export function MapComponent() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountriesData,
  });

  if (isError) {
    return (
      <span className="font-bold text-red-700">Error Fetching Map Data</span>
    );
  }

  const position: LatLngExpression = [51.505, -0.09];

  if (isLoading) {
    return (
      <span className="font-bold text-green-600">Loading Map Component</span>
    );
  }

  return (
    <div className="map leaflet-container mb-8 sm:mb-0">
      <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
        {data.map((item: any) => {
          return (
            <Marker
              position={[item.countryInfo.lat, item.countryInfo.long]}
              key={item.country}
            >
              <Popup className="text-gray-800 bg-white shadow-md rounded-lg p-4">
                <h4 className="font-bold text-lg mb-2 underline">
                  {item.country}
                </h4>
                <p className="mb-2">
                  Active Cases: <span className="font-bold">{item.active}</span>
                </p>
                <p className="mb-2">
                  Recovered Cases:{' '}
                  <span className="font-bold">{item.recovered}</span>
                </p>
                <p className="mb-2">
                  Total Deaths: <span className="font-bold">{item.deaths}</span>
                </p>
              </Popup>
            </Marker>
          );
        })}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
