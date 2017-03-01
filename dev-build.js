
var path = require("path");
var appConfig = require('./config/app.dev.js');

/*
//是否压缩（debug模式）
debug ? function() {} : new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
    },
    comments:false,
    except: ['$super', '$', 'exports', 'require'] //排除关键字
}),
*/

module.exports = Object.assign(appConfig,{
    // 输出项目
    output: {
        path: path.resolve(__dirname, "./build/"),
        publicPath: '/customer',
        filename: '[name].js' //: '[name]'+ cst.timefix +'.min.js'
    },
    //devtool:"eval-source-map",
    devServer: {
        inline: true , //实时刷新
        open: true,
        host: "192.168.1.165",
        port: "8005",
        historyApiFallback: true,
    },
});
