const request = require('request');
const _ = require('underscore');
const qs = require('querystring');

module.exports = class HypothesisAPI {
	constructor (APIkey) {
		this.options = {
		  headers: {
		    'User-Agent': 'request',
		    'Host': 'hypothes.is',
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + APIkey,
		  }
		};
	}

	deleteAnnotation (id) {
		let options = _.extend(this.options, { url: 'https://hypothes.is/api/annotations/' + id });
		return new Promise((resolve, reject) => {
			request.delete(options, (error, response, body) => {
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});
	}

	getAnnotation (id) {
		let options = _.extend(this.options, { url: 'https://hypothes.is/api/annotations/' + id });
		return new Promise((resolve, reject) => {
			request(options, (error, response, body) => {
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});
	}

	getProfile () {
		let options = _.extend(this.options, { url: 'https://hypothes.is/api/profile' });
		return new Promise((resolve, reject) => {
			request(options, (error, response, body) => {
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});
	}

	// Not working yet.
	newAnnotation (annotation) {
		let options = _.extend(this.options, { 
			url: 'https://hypothes.is/api/annotations/',
			body: JSON.stringify(annotation)
		});
		return new Promise((resolve, reject) => {
			request.post(options, (error, response, body) => {
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});	
	}

	search (query) {
		let options = _.extend(this.options, { qs: query, url: 'https://hypothes.is/api/search' });
		return new Promise((resolve, reject) => {
			request(options, (error, response, body) => {
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});
	}

	updateAnnotation (id, annotation) {
		let options = _.extend(this.options, { 
			url: 'https://hypothes.is/api/annotations/' + id,
			body: JSON.stringify(annotation)
		});
		return new Promise((resolve, reject) => {
			request.patch(options, (error, response, body) => {
			  if (error) console.log(error);
			  if (!error && response.statusCode == 200) {
			    var info = JSON.parse(body);
			    resolve(info);
			  }
			});
		});
	}
}
