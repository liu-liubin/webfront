#�� /bin/bash

##  ʹ���Ա�����
yarn config set registry 'https://registry.npm.taobao.org'

##  ��ʼ��yarn��Ŀ
node yarn.init.js 

##  ��װwebpack��Ŀ��
yarn add --dev webpack@1.13.3
yarn add --dev extract-text-webpack-plugin@1.0.1

##  babel es2015���뵽es5 ##
##  babel-loader,babel-core,babel-preset-es2015 ##
yarn add --dev babel-loader 
yarn add --dev babel-core 
yarn add --dev babel-preset-es2015

##  es6��ȫʹ�ýż� ##
yarn add --dev babel-polyfill   

##  ȫ�ְ�װwebpack-dev-server���� ##
yarn global add webpack-dev-server@1.16.2

##  ��Ŀ��װwebpack-dev-server���� ##
yarn add --dev webpack-dev-server@1.16.2  


##  ��Ŀ��װhtml-webpack-plugin@2r���� ##
yarn add --dev html-webpack-plugin@2

##  ����css��·�����õ�����|��̬����ʽд��css ##
yarn add --dev css-loader 
yarn add --dev style-loader 

## sass lessԤ��������� ##
yarn add --dev sass-loader  
yarn add --dev less-loader 
yarn add --dev node-sass@latest

yarn add --dev postcss-loader

##  �ļ���Դ���� ##
yarn add --dev url-loader 
yarn add --dev file-loader 

##  ����html-webpack-plugin ʱ����html�� ##
yarn add --dev ejs-loader