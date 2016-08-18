/**
 * Created by maluramichael on 18/08/16.
 */

export default class BaseAPIProvider {
	constructor(api:API) {
		this.api = api.request;
		this.setBearer = api.setBearer;
		this.createQuery = api.createQuery;
	}
}