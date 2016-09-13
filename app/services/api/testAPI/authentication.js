'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */
import BaseAPIProvider from '../../../core/api/baseProvider';

// TODO: Rename to Bearer Provider
export default class AuthenticationProvider extends BaseAPIProvider {
	setBearer( token ) {
		this.api.setBearer( token );
	}

	login( apikey:String ) {
		return this.api.post( '/login', { apikey } );
	}
}