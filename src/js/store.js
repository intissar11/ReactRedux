import {createStore} from 'redux';
import rootreducers from './Reducer';
const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootreducers,devtools);
export default store;