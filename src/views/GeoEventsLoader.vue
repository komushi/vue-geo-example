<template>
  <div>
     <d3-geo-events 
      id="01" 
      topojson-path="data/tokyo_23_blocks_districts_final.json"
      :layer-event-data="matrixJson"
      >    
    </d3-geo-events>
  </div>
</template>

<script>
import * as d3geo from 'vue-d3-geo';
import 'vue-d3-geo/dist/vue-d3-geo.css';
import axios from 'axios'

export default {
  name: 'GeoEventsLoader',
  data() {
    return {
      jsons: [],
      matrixJson: null
    };
  },
  mounted() {
    axios.get("data/event_data1.json")
      .then((response)  =>  {
        console.log(response.data.toptenlist);
        this.jsons.push(response.data.toptenlist);
      }, (error)  =>  {
      })

    axios.get("data/event_data2.json")
      .then((response)  =>  {
        console.log(response);
        this.jsons.push(response.data.toptenlist);
      }, (error)  =>  {
      })


    setInterval(() => {
      let idx = Math.floor(Math.random() * 2);
      this.matrixJson = this.jsons[idx];
      // console.log(this.matrixJson);
    }, 1200);
  },
  components: {
    D3GeoEvents: d3geo.D3GeoEvents
  }
}
</script>