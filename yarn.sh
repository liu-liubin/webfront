#！ /bin/bash

##  使用淘宝镜像
yarn config set registry 'https://registry.npm.taobao.org'

##  初始化yarn项目
node yarn.init.js 

##  安装webpack项目包
yarn add --dev webpack@1.13.3
yarn add --dev extract-text-webpack-plugin@1.0.1

##  babel es2015编译到es5 ##
##  babel-loader,babel-core,babel-preset-es2015 ##
yarn add --dev babel-loader 
yarn add --dev babel-core 
yarn add --dev babel-preset-es2015

##  es6安全使用脚架 ##
yarn add --dev babel-polyfill   

##  全局安装webpack-dev-server服务 ##
yarn global add webpack-dev-server@1.16.2

##  项目安装webpack-dev-server服务 ##
yarn add --dev webpack-dev-server@1.16.2  


##  项目安装html-webpack-plugin@2r服务 ##
yarn add --dev html-webpack-plugin@2

##  处理css中路径引用等问题|动态把样式写入css ##
yarn add --dev css-loader 
yarn add --dev style-loader 

## sass less预处理编译器 ##
yarn add --dev sass-loader  
yarn add --dev less-loader 
yarn add --dev node-sass@latest

yarn add --dev postcss-loader

##  文件资源处理 ##
yarn add --dev url-loader 
yarn add --dev file-loader 

##  用于html-webpack-plugin 时处理html的 ##
yarn add --dev ejs-loader