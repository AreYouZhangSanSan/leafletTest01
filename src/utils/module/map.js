import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'
// 创建地图对象
const createMap = (divId, options) => {
  let map = $L.map(divId, options)
  return map
}
// 加载地图服务
const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options)
  tileLayer.addTo(map)
  return tileLayer
}
// 创建波束圆点
const createCircle = async (map, latLng, options, number) => {
  let circleName = '波束' + number
  // 画一个circle
  const circle = $L.circle(latLng, options).addTo(map)
  // 绑定一个悬浮框
  let toolitps = `<h4> `+ circleName +`</h4>`
  circle.bindTooltip(toolitps);
  // 绑定一个自定义弹窗
  const html = `<h1>` + circleName +`</h1><br/><link>点击查看详情</link></h1>`
  circle.bindPopup(html, { maxHeight: 250, maxWidth: 490, className: 'sample-tooltips', offset: [0, 0] }).on('popupopen', function (params) {
    console.log(params)
  })
  map.flyTo(circle.getLatLng())
  // map.fitBounds(circle.getBounds())
}
// 创建弹框
const createPopup = async (map, options) => {
  console.log('test1')
  let popup = $L.popup(options)
  // popup.addTo(map)
  return popup
}
export default {createMap, createTileLayer, createCircle, createPopup}
