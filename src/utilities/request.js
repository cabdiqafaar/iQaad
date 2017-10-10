import request from 'superagent'
const defaultAjaxTimeOut = 3000;
request.prototype.finish = function(callback){
	this.end((err,res) => {
		callback(err,res)
	})
};

let requestWraper = function(method){
	return function(url){
		return request[method][url]
		.type('form')
		.timeout(defaultAjaxTimeOut);

	};

};

export default {
	get:  requestWraper('get'),
	post: requestWraper('post'),
	put:  requestWraper('put'),
	del:  requestWraper('del')
}
