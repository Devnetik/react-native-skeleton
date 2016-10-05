'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */
import Reactotron from 'reactotron-react-native';
import {create} from 'apisauce';
import BaseAPIProvider from './baseProvider';

/**
 * Provides a nice wrapper around the apisauce module
 * @class API
 */
export default class API {

	/**
	 * constructor - description
	 *
	 * @constructs API
	 * @param  {type} url description
	 * @return {type}     description
	 */
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

	/**
	 * Stores a provider for later usage in the api
	 *
	 * @method App#addProvider
	 *
	 * @param {String} name
	 * A name which you have to later use to get the provider
	 *
	 * @param {BaseAPIProvider} provider
	 * Your api provider which provides your api methods
	 *
	 * @return {BaseAPIProvider}
	 * The added provider
	 *
	 * @example
	 * const authentication = new AuthenticationProvider();
	 * const api = new API();
	 * api.addProvider('Authentication', authentication);
	 */
	addProvider(name, provider) {
		if (this.providers.has(name)) {
			// provider already attached
		} else {
			provider.setAPI(this);
			this.providers.set(name, provider);
		}
	}

	/**
	 * Searches for a provider with the passed name
	 *
	 * @method App#getProvider
	 *
	 * @param {String} name
	 * Name of the previously added provider
	 *
	 * @return {BaseAPIProvider}
	 * Instance of the provider
	 *
	 * @example
	 * const authentication = new AuthenticationProvider();
	 * const api = new API();
	 *
	 * api.addProvider('Authentication', authentication);
	 *
	 * const authProvider = api.getProvider('Authentication');
	 */
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
