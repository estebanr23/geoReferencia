import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet"
import { initialPosition } from "../assets/const";

function Test() {
  return (
    <div className="h-screen bg-slate-900 text-white p-8">
      <h1 className="font-semibold text-center text-2xl mb-4">Test</h1>

      <MapContainer className="h-96 w-full" center={initialPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <WMSTileLayer 
          url="http://ows.mundialis.de/services/service?" 
          params={{
            format:"image/png",
            layers:"TOPO-OSM-WMS", // SRTM30-Colored-Hillshade - TOPO-OSM-WMS
          }}
        />
      </MapContainer>
    </div>
  )
}

export default Test;
