import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

const rootreducers = combineReducers({taskReducer})
export default rootreducers;