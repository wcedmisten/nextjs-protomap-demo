# Map Demo

This is a minimal NextJS map demo for trying to set up MapLibre GL with
Protomaps.

The `.pmtiles` files were created by first running
[openmaptiles](https://github.com/openmaptiles/openmaptiles)

Currently these files used to default zoom level, which is only level 7.
This means that high resolution zoom is not available, but it does show
land usage details at a high level.

And then converting them with
[go-pmtiles](https://github.com/protomaps/go-pmtiles)

## Install

Run dependencies with

```
npm install
```

Run the project with:

```
npm run dev
```

And visit [http://localhost:3000](http://localhost:3000) to see the map.


# Glyphs

The glyphs here are self hosted under `/public/glyphs`, and were generated from: https://github.com/openmaptiles/fonts

I initially had some issues installing the dependencies, but was able to get them installed
by using node `v16.18.0` and manually running `npm install fontnik@0.7.0` before installing the
project deps.
