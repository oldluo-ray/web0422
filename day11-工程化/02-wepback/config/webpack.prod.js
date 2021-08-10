const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 处理html的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 单独抽取css的插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //压缩css

module.exports = {
  entry: './src/js/index.js', //入口
  output: {
    filename: './js/main.js', //打包后文件的名称
    path: resolve(__dirname, '../build'), // 打包后文件所处的路径
    assetModuleFilename: 'assets/[hash:8][ext][query]', //将静态资源文件打包到images里面
  },
  mode: 'production',
  // 配置加载器
  module: {
    // rules中所有的loader都是从下到上/从右往左依次执行
    rules: [
      // 使用eslint优先检测js代码是否符合规范
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: 'pre', // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: 'eslint-loader',
        },
      },
      // 处理js兼容性问题
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // 处理css文件
      {
        test: /\.css$/,
        //从右往左依次执行
        // less-loader将less编译成css
        // css-loader将css代码以commonjs的形式添加到main.js

        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      // 处理less
      {
        test: /\.less$/,
        //从右往左依次执行
        // less-loader将less编译成css
        // css-loader将css代码以commonjs的形式添加到main.js
        // style-loader将main.js中的css代码,以内嵌的形式,添加到页面上
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
    ],
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      //如果,不写这个template.插件会自动创建一个新的html.不包含结构. 写了template.会根据源html文件,生成打包之后的html
      template: './src/index.html',
    }),
    // 单独抽取css的插件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    }),
    // 压缩css的插件
    new CssMinimizerPlugin(),
  ],
  target: 'browserslist', // 让webpack兼容生效，但是devServer会失效，但是生产环境不需要devServer
}
