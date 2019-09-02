<template>
  <div>
     <d3-geo-static 
      id="01"
      topojson-path="data/europe.topojson"
      layer-objects="europe"
      layer-feature-name="properties.NAME"
      layer-feature-code="id"
      scale="800"
      width="1200"
      height="1200"
      center="15.1373363, 55.5598312"
      >
    </d3-geo-static>
  </div>
</template>

<script>
import * as d3geo from 'vue-d3-geo';
import 'vue-d3-geo/dist/vue-d3-geo.css';

export default {
  name: 'GeoStaticEuropeLoader',
  data() {
    return {
    };
  },
  components: {
    D3GeoStatic: d3geo.D3GeoStatic
  }
}
</script>