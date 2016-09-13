'use strict';

/**
 * Created by maluramichael on 13/09/16.
 */

import Provider from './provider';
import {Answers} from 'react-native-fabric';

class Fabric extends Provider {
	constructor() {
		super();
	}

	logEvent(name, data) {
		Answers.logCustom(name, data);
	}
}

export default Fabric;