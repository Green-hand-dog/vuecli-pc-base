export default {
	setObject(key,value){
		window.sessionStorage.setItem(key,JSON.stringify(value));
	},
	
	getObject(key){
		return JSON.parse(window.sessionStorage.getItem(key) || '[]');
	},
	
	removeObject(key){
		window.sessionStorage.removeItem(key);
	},
	
	removeAllObject(){
		window.sessionStorage.clear();
	},
}