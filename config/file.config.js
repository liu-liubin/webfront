var fs = require("fs");
var path = require("path");
var appTxt = `
angular.element(document).ready(function(){
    (function(initW=750,initH=1334,font=20){
      //Math.max(document.documentElement.clientHeight ,document.body.clientHeight);
      let viewW = document.documentElement.clientWidth;
      let viewH = document.documentElement.clientHeight;
      let ratio = Math.round( viewW/initW*10000)/10000 ;
      let base = (font/16)*100*ratio;
      document.body.style.width = viewW + "px";
      document.body.style.height = viewH + "px";
      document.documentElement.style.fontSize = Math.round(base*1000)/1000 +"%";
      document.documentElement.setAttribute("data-dpr",window.devicePixelRatio);

      let resizeFun = function(){
          let zviewW = document.documentElement.clientWidth;
          let zviewH = document.documentElement.clientHeight;
          let zratio = Math.round( zviewW/initW*1000)/1000 ;
          let base = (font/16)*100*zratio;

          document.documentElement.style.fontSize = Math.round(base*1000)/1000+"%" // Math.round(ofs * zratio*1000)/1000+"%";
          // document.documentElement.setAttribute("data-size",(Math.round(ofs * zratio*1000)/1000));
          document.documentElement.setAttribute("data-dpr",window.devicePixelRatio );
          document.body.style.width = zviewW + "px";
          document.body.style.height = zviewH + "px";
      }
      window.addEventListener("resize",_e.throttle(resizeFun,200),false);
    })(750,1334,20);
    var App = angular.module("ngApp",[]);
    angular.bootstrap(document,["ngApp"]);
})
`.trim();
var dir = path.resolve(__dirname , "../app");
if( false!==fs.existsSync(dir+'/app.js') && false!==fs.existsSync(dir+'/index.js') ) return true;
if(fs.existsSync(dir)===false){
  var csf = fs.mkdirSync(dir);  //创建app目录

    fs.writeFile( dir+'/index.js' , '', (err) => {
      if (err) throw err;
      console.log('创建index.js文件成功！');
    });
    fs.writeFile( dir+'/app.js',appTxt, (err)=>{
      if (err) throw err;
      console.log("创建app.js文件成功");
    })

}else{
    fs.writeFile( dir+'/index.js', '', (err) => {
      if (err) throw err;
      console.log('创建index.js文件成功');
    });
    fs.writeFile( dir+'/app.js',appTxt, (err)=>{
      if (err) throw err;
      console.log("创建app.js文件成功");
    })
}
