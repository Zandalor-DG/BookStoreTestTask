import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware), devTools));
//
export default store;
