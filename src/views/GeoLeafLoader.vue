<template>
  <div>
    <d3-geo-leaf
      v-if="currentSubway"
      id="06" 
      :geojson-object="currentSubway"
      color-range='#6f97d9,#6f97d9'
      >    
    </d3-geo-leaf>     

  </div>
</template>

<script>
import * as d3geo from 'vue-d3-geo';
import 'vue-d3-geo/dist/vue-d3-geo.css';
import axios from 'axios'

export default {
  name: 'GeoLeafLoader',
  data() {
    return {
      currentSubway: null
    };
  },
  mounted() {
    axios.get("data/rinkai.geojson")
      .then((response)  =>  {
        this.currentSubway = response.data
      }, (error)  =>  {
      
      });
  },
  methods: {
  },
  components: {
    D3GeoLeaf: d3geo.D3GeoLeaf
  }
}
</script>