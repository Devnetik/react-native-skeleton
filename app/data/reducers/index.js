/**
 * Created by maluramichael on 18/08/16.
 */

import { combineReducers } from 'redux';

import Loading from './loading';
import SideMenu from './sideMenu';

export default combineReducers( { Loading, SideMenu } );