/**
 * Created by maluramichael on 18/08/16.
 */
import Reactotron from 'reactotron-react-native';
import createReactotronEnhancer from 'reactotron-redux';
import {
	applyMiddleware,
	createStore,
	compose
} from 'redux';
import Thunk from 'redux-thunk';
import CombinedReducers from '../reducers';

/*
 MIDDLEWARE (https://github.com/reactjs/redux/blob/master/docs/api/applyMiddleware.md)
 Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's
 dispatch method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can
 be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.
 */

/*
 COMPOSE (https://github.com/reactjs/redux/blob/master/docs/api/compose.md)

 Composes functions from right to left.
 This is a functional programming utility, and is included in Redux as a convenience.
 You might want to use it to apply several store enhancers in a row.

 (arguments): The functions to compose. Each function is expected to accept a single parameter. Its return value will be provided as an argument to the function standing to the left, and so on. The exception is the right-most argument which can accept multiple parameters, as it will provide the signature for the resulting composed function.
 returns (Function): The final function obtained by composing the given functions from right to left.
 */

/*
 STORE ENHANCER (https://github.com/reactjs/redux/blob/master/docs/Glossary.md#store-enhancer)
 A store enhancer is a higher-order function that composes a store creator to return a new, enhanced store creator.
 This is similar to middleware in that it allows you to alter the store interface in a composable way.

 Store enhancers are much the same concept as higher-order components in React, which are also occasionally called
 “component enhancers”.

 Because a store is not an instance, but rather a plain-object collection of functions, copies can be easily
 created and modified without mutating the original store. There is an example in compose documentation
 demonstrating that.

 Most likely you'll never write a store enhancer, but you may use the one provided by the developer tools. It is
 what makes time travel possible without the app being aware it is happening. Amusingly, the Redux middleware
 implementation is itself a store enhancer.
 */
const enhancerReactNativeDebugger = global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope;
const enhancerReactotron = createReactotronEnhancer( Reactotron );

const middleware = applyMiddleware( Thunk );

const composeEnhancers = compose( enhancerReactotron, middleware, enhancerReactNativeDebugger );
const storeEnhancer = composeEnhancers( createStore );

const store = storeEnhancer( CombinedReducers );
export default store;