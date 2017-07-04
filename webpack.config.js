//一个常见的Webpack配置文件
module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项

  //“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  entry: {
    promise: __dirname + "/src/promise.js"
  },
  output: {
    path: __dirname + "/dist", //打包后的文件的存放地方
    filename: "[name].js" //打包后输出文件的文件名
  },

  module: {
    loaders: [{
      //配置babel, 就可以开始使用es6/7，JSX的语法了
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        //也配置在.babelrc里，供webpack自动调用
        //presets: ['es2015','react']
      }
    }]
  }

}