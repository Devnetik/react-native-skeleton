'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */
import Core from '../../../core';
import AuthenticationProvider from './authentication';

// Define the hostname
var api = new Core.API( 'localhost/' );

// Append as much provider you want. A provider provides api functions.
api.addProvider( 'Authentication', new AuthenticationProvider() );

export default api;
