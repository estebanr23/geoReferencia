import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet"
import { initialPosition } from "../const"

function Map() {
    return (
        <MapContainer className="h-full w-full" center={initialPosition} zoom={13} scrollWheelZoom={true}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <WMSTileLayer 
            url="https://nodoide.catamarca.gob.ar/geoserver/capital_ambienteyespaciopublico/wms?"
            params={{
                format:"image/png",
                layers:"Contenedores,Espacios-Verdes,Plazas-2020-2022", // SRTM30-Colored-Hillshade - TOPO-OSM-WMS
                transparent: true,
                version:"1.1.1",
                width:256,
                height:256,
                service:'WMS',
                request:'GetMap'
            }}
            />
        </MapContainer>
    )
}

export default Map;
