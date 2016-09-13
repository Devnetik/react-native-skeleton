'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */
import Reactotron from 'reactotron-react-native';
import {create} from 'apisauce';
import BaseAPIProvider from './baseProvider';

export default class API {
	constructor(url) {
		this.request = create({
			baseURL: url || 'http://localhost',
			headers: {
				'Accept'      : 'application/json',
				'Content-Type': 'application/json'
			}
		});
		this.request.addMonitor(Reactotron.apisauce);

		this.providers = new Map();

		this.setBearer = this.setBearer.bind(this);
		this.createQuery = this.createQuery.bind(this);
		this.addProvider = this.addProvider.bind(this);
		this.getProvider = this.getProvider.bind(this);
	}

	addProvider(name:String, provider:BaseAPIProvider) {
		if (this.providers.has(name)) {
			// provider already attached
		} else {
			provider.setAPI(this);
			this.providers.set(name, provider);
		}
	}

	getProvider(name) {
		if (this.providers.has(name)) {
			return this.providers.get(name);
		} else {
			return null;
		}
	}

	setBearer(token) { // TODO: remove this. should only be available in authentication provider
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