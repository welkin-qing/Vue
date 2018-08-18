//console.log('ok')
import './css/index.css'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
$(function () {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', function () {
    return '#' + 'D97634'
  })
})