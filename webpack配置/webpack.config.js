    // 导入处理路径的模块
    var path = require('path');
    //配置hot的第二 步
    const webpack = require('webpack')
     // 导入自动生成HTMl文件的插件
     var htmlWebpackPlugin = require('html-webpack-plugin');

    // 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
    module.exports = {
        entry: path.resolve(__dirname, 'src/js/main.js'), // 项目入口文件
        output: { // 配置输出选项
            path: path.resolve(__dirname, 'dist'), // 配置输出的路径
            filename: 'bundle.js' // 配置输出的文件名
        },
        devServer: { 
            open: true,  //自动打开浏览器
            port: 3000,  //运行端口
            contentBase: 'src',  //指定的托管根目录
            hot: true //启动热更新第1步
        },
        plugins: [ //配置插件的节点
            new webpack.HotModuleReplacementPlugin(),//配置hot的第3步
            new htmlWebpackPlugin({
                template: path.join(__dirname, 'src/index.html'), //指定模板页面，将来会根据指定的页面路径，生成内存中的页面
                filename: 'index.html' //指定生成的页面名称
            })
        ],
        module: {// 这个节点，用于配置 所有 第三方模块 加载器 
            rules: [// 所有第三方模块的 匹配规则
                { test: /\.css$/, use: ['style-loader', 'css-loader']},//  配置处理 .css 文件的第三方loader 规则
                //调用顺序是从右到左
                { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
                { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
                { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=43679&name=[hash:8]-[name].[ext]' }, 
                // 处理 图片路径的 loader
                // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
                { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
                { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ } // 配置 Babel 来转换高级的ES语法
            ]
        }
    }
