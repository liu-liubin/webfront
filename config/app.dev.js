require("./file.config.js")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack 入口配置
var entry = {
  //框架、脚手架
  "js/angular": ["babel-polyfill","angular","angular-ui-router","angular-resource"],
  // 项目入口
  "js/app":[
      path.resolve(__dirname,'../app/index.js'),
      path.resolve(__dirname,'../app/app.js'),
  ],
}

var htmlPlugin = {
    title:"angular-前端开发框架",
    filename:'index.html',    //生成的html存放路径，相对于 path
    template:path.resolve(__dirname,'./tpl/index.ejs'),    //html模板路径
    inject:false,    //允许插件修改哪些内容，包括head与body,false表示可以自定义变量解析
    hash:true,    //为静态资源生成hash值,
    chunksSortMode:"none",
    chunks:["common"].concat( Object.keys(entry) ), //需求分片
    minify: {
        //removeAttributeQuotes: true // 移除属性的引号
        removeComments:false,    //移除HTML中的注释
        collapseWhitespace: false,   //删除空白符与换行符
    },
}

module.exports = {
  entry,
  plugins: [
      new webpack.ProvidePlugin({
          //angular:'angular',
      }),

      new webpack.DefinePlugin({}),

      new webpack.optimize.DedupePlugin(), //打包时删除重复或相似的文件

      // new webpack.ContextReplacementPlugin("./een"),

      //独立打包CSS模块
      new ExtractTextPlugin("css/[name].css"),

      //提取项目的公共模块
      new webpack.optimize.CommonsChunkPlugin({
          name:"common",
          filename:'common.js',
          chunks: Object.keys(entry),
          minChunks: Infinity,
      }),
      // new webpack.optimize.CommonsChunkPlugin({
      //     name:"reg_common",
      //     filename:'reg_common.js',
      //     chunks: Object.keys(chunks),
      //     minChunks: Infinity,
      // }),

      // 动态生成所需HTML项目文件（旅行系统）
      new HtmlWebpackPlugin(htmlPlugin),
      // new HtmlWebpackPlugin(registHTML),

  ],
  module:{
      // noParse:[/lib/],//不解析此文件目录及其文件path.join( __dirname + '/dev/lib/')
      loaders:[
          {test: /\.(tpl|ejs)$/, loader: 'ejs'}, //模版解析
          {test:/\.css$/,loader:'style!css'},
          {test:/\.js$/,loader:'babel',exclude: /(node_modules|bower_components)/,query:{presets: ['es2015'],compact: false}},//exclude: /(node_modules|bower_components)/,
          {test:/\.scss$/,loader:ExtractTextPlugin.extract('style', 'css!sass')},//'style!css!sass' },
          {test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,loader:'url?limit=10000&name=./images/[name].[ext]'}, //不能大于10K图片
          {test:/\.(mp3|mp4)\??.*$/,loader:'file?name=./media/[name].[ext]'},
          {test: /\.jsx$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel', // 'babel-loader' is also a legal name to reference
              query: {presets: ['react', 'es2015']}
          }
      ]
  },
  resolve:{
        //查找module的话从这里开始查找(查找根目录)
        // root: path.resolve(__dirname,"./"), //绝对路径
        // root:"",
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['','css', '.js','.jsx', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            //css
            //第三方类库
            wxjdk     : path.resolve(__dirname,'./lib/jweixin-1.1.0.js')

        },
   },   
}
