<template>
  <div>
     <d3-geo-static 
      id="01"
      topojson-path="data/states.topojson"
      layer-objects="states"
      layer-feature-name="properties.NAME"
      layer-feature-code="properties.STUSPS"
      scale="800"
      width="1024"
      height="768"
      center="-99.7506251, 38.7840204"
      >
    </d3-geo-static>
  </div>
</template>

<script>
import * as d3geo from 'vue-d3-geo';
import 'vue-d3-geo/dist/vue-d3-geo.css';

export default {
  name: 'GeoStaticUSLoader',
  data() {
    return {
    };
  },
  components: {
    D3GeoStatic: d3geo.D3GeoStatic
  }
}
</script>