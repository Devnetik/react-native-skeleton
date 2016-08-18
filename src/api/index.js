/**
 * Created by maluramichael on 18/08/16.
 */
import API from './api';
import {AuthenticationProvider} from './provider';

const api = new API();

export const Authentication = new AuthenticationProvider(api);