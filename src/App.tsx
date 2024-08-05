import React from "react"
import Map from "./Components/Map"
import './assets/leaflet/leaflet.css'
import Layout from "./Layout"

function App() {
  return (
    <React.Fragment>
      <Layout children={ <Map /> } />
    </React.Fragment>
  )
}

export default App
