import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// import './../../node_modules/leaflet/dist/leaflet.css';
import './../../../node_modules/leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
// import icon from './../../node_modules/leaflet/dist/images/marker-icon.png';
import icon from './../../../node_modules/leaflet/dist/images/marker-icon.png'
import L from 'leaflet'

function ShopMap() {
  const position = [25.0337025, 121.5411142, 17]

  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [52, 64],
    shadowUrl: null,
    shadowSize: null,
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
    <>
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: '500px', marginTop: '60px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}
export default ShopMap
