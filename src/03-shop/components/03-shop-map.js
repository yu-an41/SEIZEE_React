import { MapContainer, TileLayer, useMap, Marker, Popup,Map } from 'react-leaflet'
import './../../../node_modules/leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet'
import icon from './../../../node_modules/leaflet/dist/images/marker-icon.png'
import L from 'leaflet'
import { useState, useEffect } from 'react'

function ShopMap({ filterShop, shops, demoShop, startShop }) {
  // console.log(filterShop)
  // console.log(demoShop)
  // console.log(demoShop[0].rows.shop_lat, demoShop[0].rows.shop_lng)
  // console.log(filterShop[0][0].shop_lat, filterShop[0][0].shop_lng)
  
  const [mapShop, setMapShop] = useState({
    position: [25.0440612, 121.5139518],
    map: null,
  })

  // const position = [25.09108, 121.5598]

  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [52, 64],
    shadowUrl: null,
    shadowSize: null,
  })

  L.Marker.prototype.options.icon = DefaultIcon
  // const map = useMap();
  const changePos = function (pos) {
    setMapShop({ position: pos })
    const { map } = mapShop
    if (map) map.flyTo(pos)
  }

  useEffect(() => {
    changePos(
      startShop
        ? (demoShop[0].rows.shop_lat, demoShop[0].rows.shop_lng)
        : (filterShop[0][0].shop_lat, filterShop[0][0].shop_lng)
    )
  }, [])
  return (
    <>
      <MapContainer
        // center={
        //   startShop
        //     ? [demoShop[0].rows.shop_lat, demoShop[0].rows.shop_lng]
        //     : [filterShop[0][0].shop_lat, filterShop[0][0].shop_lng]
        // }
        center={mapShop.position}
        whenCreated={(map) => this.setState({ map })}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '500px', marginTop: '60px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {startShop ? (
          <>
            {demoShop.map((v, i) => (
              <Marker
                position={[v.rows.shop_lat, v.rows.shop_lng]}
                icon={DefaultIcon}
                key={i}
              >
                <Popup>
                  {i + 1} is for popup with lat: {v.rows.shop_lat} and lon{' '}
                  {v.rows.shop_lng}
                </Popup>
              </Marker>
            ))}
          </>
        ) : (
          <>
            {filterShop.map((v, i) => (
              <Marker
                position={[v[0].shop_lat, v[0].shop_lng]}
                icon={DefaultIcon}
                key={i}
              >
                <Popup>
                  {i + 1} is for popup with lat: {v[0].shop_lat} and lon{' '}
                  {v[0].shop_lng}
                </Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>
    </>
  )
}
export default ShopMap
