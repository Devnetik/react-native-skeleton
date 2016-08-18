/**
 * Created by maluramichael on 18/08/16.
 */

import {
	applyMiddleware,
	createStore,
	compose
} from 'redux';
import Thunk from 'redux-thunk';
import CombinedReducers from '../reducers';

const devTools = global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope;
const createStoreWithMiddleware = compose(applyMiddleware(Thunk), devTools)(createStore);

export default createStoreWithMiddleware(CombinedReducers);