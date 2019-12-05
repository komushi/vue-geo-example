<template>
  <div>
    <ul class="horizontal-list">
        <li>
           <div v-for="item in apiResponse">
            <input type="radio" v-model="geojsonString" name="time_window" :value="item.geojson"> {{item.window_start}}
          </div>
        </li>
        <li>
            <div style="width: 2000px; height: 1200px">
              <d3-geo-leaf
                v-if="featureStatistics"
                id="06" 
                :geojson-object="featureStatistics"
                color-range='#0000ff,#e623e4,#ff0000'
                >    
              </d3-geo-leaf>
            </div>
        </li>
    </ul>    
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
      geojsonString: null,
      apiResponse: []
    };
  },
  computed: {
    featureStatistics: function() {
      if (this.geojsonString) {
        return JSON.parse(this.geojsonString);
      } else {
        return null;
      }
    }
  },   
  mounted() {
    // axios.get("data/rinkai.geojson")
    //   .then((response)  =>  {
    //     this.currentSubway = response.data
    //   }, (error)  =>  {
      
    //   });

    axios.get("data/statistics.json")
      .then((response)  =>  {
        this.apiResponse = response.data
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

<style>
.horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    padding: 0;
}

.horizontal-list li {
    display: inline-block;
}
</style>