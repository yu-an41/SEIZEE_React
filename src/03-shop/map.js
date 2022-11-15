import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'
import './../../node_modules/leaflet/dist/leaflet.css';
import './../../node_modules/leaflet/dist/leaflet';
import icon from './../../node_modules/leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
// import DraggableMarker from './DraggableMarker';

    function Map(){
        const position = [25.0337025,121.5411142,17]

        const DefaultIcon = L.icon({
            iconUrl: icon,
            iconSize: [52,64],
            shadowUrl: null,
            shadowSize: null,
        });
          
        L.Marker.prototype.options.icon = DefaultIcon;

        return<>

          <MapContainer center={position} zoom={18} scrollWheelZoom={false} style={{height:"500px"}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

        </>
    }
    export default Map

    // function Map(){
    //     // const position = [25.0337025,121.5411142,17]

    //     const center = {
    //         lat: 51.505,
    //         lng: -0.09,
    //       }

    //     return<>

    //       <MapContainer center={center} zoom={18} scrollWheelZoom={false} style={{height:"1000px"}}>
    //         <TileLayer
    //           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         {/* <Marker position={position}>
    //           <Popup>
    //             A pretty CSS3 popup. <br /> Easily customizable.
    //           </Popup>
    //         </Marker> */}
    //         <DraggableMarker />
    //       </MapContainer>

    //     </>
    // }
    // export default Map

    
      
    //   render(
    //     <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
    //       <TileLayer
    //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       />
          
    //     </MapContainer>,
    //   )
                    