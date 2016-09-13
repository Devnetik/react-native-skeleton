'use strict';

/**
 * Created by maluramichael on 29/08/16.
 */

import Fabric from './fabric';

class Analytics {
	constructor() {
		this.provider = [ new Fabric() ];

		this.logEvent = this.logEvent.bind( this );
	}

	logEvent( name, data ) {
		for ( var provider of this.provider ) {
			provider.logEvent( name, data );
		}
	}
}

const analytics = new Analytics();

export default analytics;