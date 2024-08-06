import React from "react";
import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet"
import { initialPosition } from "../const"
import useStore from "../store/useStore";
import logo from "../assets/favicon.svg";

function Map() {
    const { url, filter } = useStore();    
    
    return (
        <React.Fragment> 
            {
                (url && filter) 
                    ? (<MapContainer className="h-full w-full" center={initialPosition} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <WMSTileLayer 
                                url={url}
                                params={{
                                    format:"image/png",
                                    layers: `${filter}`,
                                    transparent: true,
                                    version:"1.1.1",
                                    width:256,
                                    height:256,
                                    service:'WMS',
                                    request:'GetMap'
                                }}
                            />
                        </MapContainer>)
                    :   (<div className="h-full flex flex-col justify-center items-center">
                            <img src={logo} className="size-28" alt="Logo react" />
                            <p className="font-semibold">Seleccione los filtros</p>
                        </div>)
            }
        </React.Fragment> 
    )
}

export default Map;
