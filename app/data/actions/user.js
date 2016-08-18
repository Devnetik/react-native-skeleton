/**
 * Created by maluramichael on 18/08/16.
 */

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_USER = 'SAVE_USER';

export function saveToken(token) {
	return {type: SAVE_TOKEN, token}
}

export function saveUser(user) {
	return {type: SAVE_USER, user}
}