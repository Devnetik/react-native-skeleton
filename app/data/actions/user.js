/**
 * Created by maluramichael on 18/08/16.
 */
const NAMESPACE = 'user.';

export const SAVE_TOKEN = NAMESPACE + 'save.token';
export const SAVE_USER = NAMESPACE + 'save.user';

export function saveToken( token ) { return { type: SAVE_TOKEN, token }; }
export function saveUser( user ) { return { type: SAVE_USER, user }; }