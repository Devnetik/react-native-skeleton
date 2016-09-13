/**
 * Created by maluramichael on 13/09/16.
 */
import Reactotron, {trackGlobalErrors} from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron
	.configure({name: 'Skeleton'})
	.use(trackGlobalErrors())
	.use(apisaucePlugin())
	.connect();