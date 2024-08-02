import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet"
import { initialPosition } from "./assets/const"

function App() {
  return (
    <div className="h-screen bg-slate-900 text-white p-8">
      <h1 className="font-semibold text-center text-2xl mb-4">App de GeoReferencia</h1>

      <MapContainer className="h-full w-full" center={initialPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <WMSTileLayer 
          url="https://nodoide.catamarca.gob.ar/geoserver/capital_infraestructurayequipamiento/wms?"
          params={{
            format:"image/png",
            layers:"Deportes", // SRTM30-Colored-Hillshade - TOPO-OSM-WMS
            transparent: true,
            version:"1.1.1",
            width:256,
            height:256,
            service:'WMS',
            request:'GetMap'
          }}
        />
      </MapContainer>
    </div>
  )
}

export default App
