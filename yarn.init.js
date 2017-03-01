var fs = require("fs");   //导入文件模块
var path = require("path");  //导入路径模块

var basename = path.basename(__dirname); //获取当前文件夹名称

var initContent = `
{
  "name": "${basename}",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "webpack-dev-server --config dev-hot.js",
    "webpack": "webpack --config dev-hot.js",
    "build": "webpack --config dev-build.js", 
  }
}

`.trim();
if( false!==fs.existsSync('./package.json') )return true;
fs.writeFile( './package.json' , initContent , (err) => {
    if (err) throw err;
    console.log('创建package.json文件成功！');
});