import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './../../../node_modules/leaflet/dist/leaflet.css'
// import 'leaflet/dist/leaflet'
import icon from './../../../node_modules/leaflet/dist/images/marker-icon.png'
import L from 'leaflet'
import { useState, useEffect } from 'react'
import log from 'eslint-plugin-react/lib/util/log'

function ShopMap({ findPos, demoShop, shops, startShop, filterShop }) {
  // console.log(findPos)

  const DefaultIcon = L.icon({
    iconUrl: '/03-shop-img/mappin_01.png',
    iconSize: [60, 70],
    shadowUrl: null,
    shadowSize: null,
  })
  L.Marker.prototype.options.icon = DefaultIcon

  // function AAA() {
  //   const map = useMap()
  //   map.flyTo([122.3333, 26.3333])
  //   return (
  //     <Marker position={[122.2222, 25.2222]} icon={DefaultIcon} >
  //       <Popup>is for popup with lat:and lon</Popup>
  //     </Marker>)
  // }
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
        // whenCreated={(map) => this.setState({ map })}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: '500px', marginTop: '60px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {startShop
          ? demoShop.map((v, i) => (
              <Marker
                position={[v.rows.shop_lat, v.rows.shop_lng]}
                icon={DefaultIcon}
                key={v.rows.sid}
              >
                <Popup>{v.rows.shop_name}</Popup>
              </Marker>
            ))
          : filterShop.map((v, i) => (
              <Marker
                position={[v[0].shop_lat, v[0].shop_lng]}
                icon={DefaultIcon}
                key={v[0].sid}
              >
                <Popup>{v[0].shop_name}</Popup>
              </Marker>
            ))} */}
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
