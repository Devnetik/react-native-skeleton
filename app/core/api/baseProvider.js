'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */

export default class BaseAPIProvider {
	constructor() {
		this.setAPI = this.setAPI.bind(this);
	}

	setAPI(api){
		this.api = api.request;
		this.setBearer = api.setBearer;
		this.createQuery = api.createQuery;
	}
}
