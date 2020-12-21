import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
