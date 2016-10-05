'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */
import BaseAPIProvider from '../../../core/api/baseProvider';

export default class AuthenticationProvider extends BaseAPIProvider {
	setBearer( token ) {
		this.api.setBearer( token );
	}

	login( apikey ) {
		return this.api.post( '/login', { apikey } );
	}
}
