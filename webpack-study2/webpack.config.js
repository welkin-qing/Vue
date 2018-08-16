var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output: { // 指定输出选项
      path: path.join(__dirname, './dist'), // 输出路径
      filename: 'bundle.js' // 指定输出文件的名称
    },
    plugins: [ // 所有webpack  插件的配置节点
        new htmlWebpackPlugin({
          template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
          filename: 'index.html' // 设置生成的内存页面的名称
        })
      ],
      module: { // 配置所有第三方loader 模块的
        rules: [ // 第三方模块的匹配规则
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理 CSS 文件的 loader
          { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
      }
}