<template>
  <div>
     <d3-geo-static 
      id="01"
      topojson-path="data/japan.topojson"
      layerObjects="japan"
      layerFeatureName="properties.nam_ja"
      layerFeatureCode="properties.id"
      scale="3000"
      width="1600"
      height="1400"
      >
    </d3-geo-static>
  </div>
</template>

<script>
import * as d3geo from 'vue-d3-geo';
import 'vue-d3-geo/dist/vue-d3-geo.css';

export default {
  name: 'GeoStaticJapanLoader',
  data() {
    return {
    };
  },
  components: {
    D3GeoStatic: d3geo.D3GeoStatic
  }
}
</script>