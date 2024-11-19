import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import Customers from './Customers'

// Fix Leaflet marker icon paths
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const markers = [
  { position: [37.7749, -122.4194], label: 'San Francisco, 231 Customers' },
]

const CustomerMap = () => (
  <div className="grid md:grid-cols-[1fr_240px] rounded-lg py-6 gap-6">
    <div className="bg-white shadow-md rounded-lg">
      <h3 className="text-[#081735] text-lg font-semibold py-5 px-8">
        Customer Map
      </h3>
      <div className="w-full h-[1px] bg-[#E6E8F0] my-4" />
      <div className="px-8" style={{ height: '340px' }}>
        <MapContainer
          center={[37.7749, -122.4194]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false} // Remove zoom controls
          scrollWheelZoom={false} // Disable zooming with scroll
          className="rounded-lg" // Apply rounded corners to the map
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Light-colored tiles
            attribution='&copy; <a href="https://www.carto.com/">CARTO</a>'
          />
          {markers.map((marker, index) => (
            <Marker position={marker.position} key={index}>
              <Popup>{marker.label}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    <div>
      <Customers />
    </div>
  </div>
)

export default CustomerMap
