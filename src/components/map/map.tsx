import React, { useRef, useEffect } from 'react'
import { Place } from '../../types'
import { useMap } from 'react-leaflet/hooks'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup
} from 'react-leaflet'
import 'leaflet-routing-machine'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-defaulticon-compatibility'

type MapProps = {
  places: [Place]
  setCurrentPlace: Function
}

function FitBounds({ places, setCurrentPlace }: any) {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const primaryColor: string = process.env.tailwindConfig.colors.primary

    const routingControl = L.Routing.control({
      waypoints: places.map((place: Place) =>
        L.latLng(place.attributes.latitude, place.attributes.longitude)
      ),
      createMarker: (i: any, wp: any) => {
        return L.marker(wp.latLng, {
          icon: L.divIcon({
            html: `
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="${primaryColor}" fill-opacity="0"></path>
                <circle cx="12" cy="10" r="3" stroke="${primaryColor}" fill-opacity="0"></circle>
              </svg>`,
            className: '',
            iconSize: [24, 24],
            iconAnchor: [12, 24]
          })
        }).on('click', function () {
          setCurrentPlace(
            places.find(
              (place: Place) =>
                +place.attributes.latitude === wp.latLng.lat &&
                +place.attributes.longitude === wp.latLng.lng
            )
          )
        })
      },
      lineOptions: {
        styles: [{ color: primaryColor, opacity: 1, weight: 2 }]
      },
      routeWhileDragging: true
      /* router: L.Routing.mapbox(
        'pk.eyJ1IjoibGVvYnJvc3NhdWx0IiwiYSI6ImNsNnF2d2lrdjBsZmIzZG1tMmYzdWVxZmUifQ.FtNaYvgw4zwel_XTF_oToA'
      ), */
    }).addTo(map)

    routingControl.hide()
  }, [map])

  return null
}

export const Map = ({ places, setCurrentPlace }: MapProps) => {
  return (
    <MapContainer
      center={[40.8054, -74.0241]}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

      <FitBounds places={places} setCurrentPlace={setCurrentPlace} />
    </MapContainer>
  )
}

export default Map
