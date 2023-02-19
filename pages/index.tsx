import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'

import maplibregl from 'maplibre-gl';
import * as pmtiles from "pmtiles";
import layer from 'data/layers.json'

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(41.1533);
  const [lat] = useState(20.1683);

  const [zoom] = useState(2);

  useEffect(() => {
    if (map.current) return;

    let protocol = new pmtiles.Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        glyphs: '/glyphs/{fontstack}/{range}.pbf',
        version: 8,
        "sources": {
          "openmaptiles": {
            "type": "vector",
            "url": "pmtiles:///switzerland.pmtiles"
          }
        },
        layers: layer
      },
      // style: 'https://demotiles.maplibre.org/style.json',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Map></Map>
      </main>
    </>
  )
}
