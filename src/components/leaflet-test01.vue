<template>
  <div class="map-container">
    <div id="map-container" style="width: 100%; height: 100%">
    </div>
  </div>
</template>

<script>
import NavigationCtrl from './NavigationCtrl'
export default {
  name: 'leafletTest01',
  components: {
    NavigationCtrl
  },
  data () {
    return {
      map: null,
      OSMUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      array: []
    }
  },
  mounted () {
    this.map = this.$utils.map.createMap('map-container', {
      zoomControl: true
    })

    // 加载 open street map 图层服务
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {})
    // 设施地图视图 中心位置
    this.map.setView([34.3227, 108.5525], 5)
    // 画波束图
    // this.$utils.map.createCircle(this.map, [31.52, 117.17], {
    //   color: '#fff', // 描边色
    //   fillColor: '#f03', // 填充色
    //   fillOpacity: 0.5, // 透明度
    //   radius: 100000 // 半径，单位米
    // }, 1)
    // this.$utils.map.createCircle(this.map, [30.31, 117.02], {
    //   color: '#fff', // 描边色
    //   fillColor: '#f03', // 填充色
    //   fillOpacity: 0.5, // 透明度
    //   radius: 100000 // 半径，单位米
    // },2)
    // this.$utils.map.createCircle(this.map, [32.56, 117.21], {
    //   color: '#fff', // 描边色
    //   fillColor: '#f03', // 填充色
    //   fillOpacity: 0.5, // 透明度
    //   radius: 100000 // 半径，单位米
    // }, 3)
    // this.$utils.map.createCircle(this.map, [33.52, 115.47], {
    //   color: '#fff', // 描边色
    //   fillColor: '#f03', // 填充色
    //   fillOpacity: 0.5, // 透明度
    //   radius: 100000 // 半径，单位米
    // },4)
    this.array = [[31.52, 117.17],[30.31, 117.02],[32.56, 117.21],[33.52, 115.47],[33.30,119.09],[34.36,119.33],[31.26,119.29],
      [31.48,121.39],[32.05,121.03],[41.48,123.25],[40.51,122.43],[39.55,116.24],[26.05,119.18],[20.54,110.04],[23.22,116.41],[22.33,114.07],[22.32,113.01],[22.48,108.19]]
    for (let [key, val] of this.array.entries()){
      console.log(key, val)
      this.$utils.map.createCircle(this.map, val, {
        color: '#fff', // 描边色
        fillColor: '#f03', // 填充色
        fillOpacity: 0.5, // 透明度
        radius: 100000 // 半径，单位米
      }, key+1)
    }
    this.resetMap()
  },
  methods: {
    zoomIn () {
      this.map.zoomIn()
    },
    zoomOut () {
      this.map.zoomOut()
    },
    resetMap () {
      this.map.setView([34.3227, 108.5525], 5)
    }
  }
}
</script>
<style scoped>
  .map-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
