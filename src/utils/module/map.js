import 'leaflet/dist/leaflet.css'
import $L from 'leaflet'
import { chinaProvider } from 'leaflet.chinatmsproviders'
import L from 'leaflet'

// 创建地图对象
const createMap = (divId, options) => {
  let map = $L.map(divId, options)
  L.ellipse([31.52, 117.17], [500, 100], 90).addTo(map)
  return map
}
// 加载地图图层服务
const createTileLayer = async (map, url, options) => {
  let tileLayer = await $L.tileLayer(url, options)
  tileLayer.addTo(map)
  return tileLayer
}
// 改变底图图层
const changeLayer = async (map) => {
  let normalm3 = await L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {})
  normalm3.addTo(map)
}
// 创建波束圆点
const createCircle = async (map, latLng, options, number) => {
  // let circleName = '波束' + number
  // 画一个circle
  const circle = $L.circle(latLng, options).addTo(map)
  // 绑定一个悬浮框
  // let toolitps = `<h4> `+ circleName +`</h4>`
  // circle.bindTooltip(toolitps)
  // // 绑定一个自定义弹窗
  // const html = `<h1>` + circleName +`</h1><br/><link>点击查看详情</link></h1>`
  // circle.bindPopup(html, { maxHeight: 250, maxWidth: 490, className: 'sample-tooltips', offset: [0, 0] }).on('popupopen', function (params) {
  //   console.log(params)
  // })
  map.flyTo(circle.getLatLng())
  // map.fitBounds(circle.getBounds())
}
// 画椭圆形波束
const ellipseMaket = (map, latLng, radii, tilt, options) => {
  L.ellipse(latLng, radii, tilt, options).addTo(map)
}
// 创建文字标注
const createIconText = (map, latLng, text) =>{
  var myIcon = L.divIcon({
    html: text,
    className: 'my-text-icon',
    iconSize:30
  });
  L.marker(latLng, { icon: myIcon }).addTo(map)
}

// 创建弹框
const createPopup = async (map, options) => {
  console.log('test1')
  let popup = $L.popup(options)
  // popup.addTo(map)
  return popup
}
export default {createMap, createTileLayer, createCircle, createPopup, changeLayer, ellipseMaket, createIconText}
