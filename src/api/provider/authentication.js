/**
 * Created by maluramichael on 18/08/16.
 */
import BaseAPIProvider from '../baseProvider';

export default class AuthenticationProvider extends BaseAPIProvider {
	setBearer(token){
		this.api.setBearer(token);
	}

	login(username:String, password:String) {
		return this.api.post('/auth/login', {username, password});
	}
}
