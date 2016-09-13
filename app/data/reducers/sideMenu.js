/**
 * Created by maluramichael on 13/09/16.
 */
import * as Actions from '../actions';

const initialState = {
	isOpen: false
};

export default ( state, action )=> {
	if ( !state ) {
		return initialState;
	}

	switch ( action.type ) {
		case Actions.SideMenu.OPEN:
			return { ...state, isOpen: true };
		case Actions.SideMenu.CLOSE:
			return { ...state, isOpen: false };
		case Actions.SideMenu.TOGGLE:
			return { ...state, isOpen: !state.isOpen };
	}

	return state;
}