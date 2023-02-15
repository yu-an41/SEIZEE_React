import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './../../../node_modules/leaflet/dist/leaflet.css'
import icon from './../../../node_modules/leaflet/dist/images/marker-icon.png'
import L from 'leaflet'
import { useState, useEffect } from 'react'
import log from 'eslint-plugin-react/lib/util/log'

//地圖
function ShopMap({ findPos, demoShop, shops, startShop, filterShop }) {
  const DefaultIcon = L.icon({
    iconUrl: '/03-shop-img/mappin_01.png',
    iconSize: [60, 70],
    shadowUrl: null,
    shadowSize: null,
  })
  L.Marker.prototype.options.icon = DefaultIcon

  function ChangePos() {
    const map = useMap()
    map.flyTo(findPos, 18)
    return (
      <Marker position={findPos} icon={DefaultIcon}>
        <Popup>{findPos.shop}</Popup>
      </Marker>
    )
  }

  return (
    <>
      <MapContainer
        center={[25.0440612, 121.5139518]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '500px', marginTop: '60px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((v, i) => (
          <Marker
            position={[v.rows.shop_lat, v.rows.shop_lng]}
            icon={DefaultIcon}
            key={v.rows.sid}
          >
            <Popup>{v.rows.shop_name}</Popup>
          </Marker>
        ))}
        <ChangePos />
      </MapContainer>
    </>
  )
}
export default ShopMap
