var path = require("path");
var appConfig = require('./config/app.dev.js');
module.exports = Object.assign(appConfig,{
    // 输出项目
    output: {
        path: path.resolve(__dirname, "./build/"),
        publicPath: '/',
        filename: 'js/[name].js' //: '[name]'+ cst.timefix +'.min.js'
    },
    //devtool:"eval-source-map",
    devServer: {
        inline: true , //实时刷新
        open: true,
        host: "192.168.1.165",
        port: "8001",
        historyApiFallback: true,
    },
});
