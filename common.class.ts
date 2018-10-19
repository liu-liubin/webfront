interface IObject {
	[propName:string]: any;
}
class Common{
	debug:boolean = false;     // 是否启用Class.assert的debug模式,默认启用
	history: IObject = window.history;
	constructor(){
		this.debug = !!/192\.168\.8\.250|k8s-yj-test\.sinaif\.com/.test(window.location.href);
		/** window.history扩展方法
		 * @popstate   Function(bool:string|记录数据, fn:function|事件回调函数)    监听浏览器导航事件"popstate"
		 */
		let popstate: (state:string|IObject, fn:any)=> void = function(state:string|IObject, fn:any){
			this.history.pushState(state, null, window.location.href);
			window.addEventListener("popstate", function(e){
				if(typeof fn == "function"){
					fn({
						state:e.state,
						go(){
							// 操作继续并停留在本页
							window.history.pushState(state, null, window.location.href);
						},
						back(){
							// 操作取消，并回退历史上一页
							window.history.go(-1);
						}
					})
				}
			});
		}
		this.history.popstate = popstate;
	}
}
