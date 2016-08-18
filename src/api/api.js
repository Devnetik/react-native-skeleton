/**
 * Created by maluramichael on 18/08/16.
 */
import {create} from 'apisauce';

export default class API {
	constructor(url) {
		this.request = create({
			baseURL: url || 'http://localhost',
			headers: {
				'Accept'      : 'application/json',
				'Content-Type': 'application/json'
			}
		});
		// this.request.addMonitor(Reactotron.apiLog);
		this.request.addMonitor(response=>console.log('[API]', response.data));
	}

	setBearer(token) {
		this.request.setHeader('Authorization', `Bearer ${token}`);
	}

	createQuery(data) {
		var query = '';
		if (typeof data === 'object') {
			var parameters = [];
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					parameters.push(key + "=" + data[key]);
				}
			}
			query = '?' + parameters.join('&');
		}
		return query;
	}
}