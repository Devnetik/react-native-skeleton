/**
 * Created by maluramichael on 18/08/16.
 */
import * as Actions from '../actions';

const initialState = {
	loadingCount: 0
};

export default (state, action)=> {
	if (!state) {
		return initialState;
	}

	switch (action.type) {
		case Actions.Loading.LOAD:
			return { ...state, loadingCount: state.loadingCount + 1 };
		case Actions.Loading.DONE:
			return { ...state, loadingCount: Math.max( 0, state.loadingCount - 1 ) };
	}

	return state;
}