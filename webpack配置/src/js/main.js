// 这是 main.js 是我们项目的JS入口文件

//simport $ from 'jquery'
// import '../css/index.css'
// import '../css/index.less'
// import '../css/index.scss'


// console.log('ok')
// import 'bootstrap/dist/css/bootstrap.css'
// console.log('123')

// $(function () {
//   $('li:odd').css('backgroundColor', 'yellow')
//   $('li:even').css('backgroundColor', function () {
//     return '#' + 'D97634'
//   })
// })

class Person {
  // 使用 static 关键字，可以定义静态属性
  // 所谓的静态属性，就是 可以直接通过 类名， 直接访问的属性
  // 实例属性： 只能通过类的实例，来访问的属性，叫做实例属性
  static info = { name: 'zs', age: 20 }
}
console.log(Person.info)
