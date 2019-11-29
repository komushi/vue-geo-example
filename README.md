# vue-geo-example
Demo app powered by [vue-d3-geo](https://github.com/komushi/vue-d3-geo/)

![screenshot](https://raw.githubusercontent.com/komushi/vue-geo-example/master/images/leaflet.jpg)

## src folder structure
src
├── App.vue
├── assets
│   └── logo.png
├── components
│   └── HelloWorld.vue
├── main.js
├── router.js
├── store.js
└── views
    ├── Geo2LayerLoader.vue
    ├── GeoEventsLoader.vue
    ├── GeoLeafLoader.vue
    ├── GeoStaticEuropeLoader.vue
    ├── GeoStaticJapanLoader.vue
    ├── GeoStaticUSLoader.vue
    └── Home.vue

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```
*open http://localhost:8080/ in browser*
*check http://localhost:8080/GeoLeafLoader for leaflet integration*

## Extend more demos
Please add or edit the view-vue files under src/views/ for further use.
* src/views/GeoLeafLoader.vue
* src/views/GeoStaticJapanLoader.vue
* ...

## Credits:
* https://github.com/komushi/vue-d3-geo/
* https://github.com/leakyMirror/map-of-europe/
* https://github.com/dataofjapan/land/