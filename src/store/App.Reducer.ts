import {combineReducers} from 'redux';
import subscribers from './Subscribers/subscribers.reducer';

const AppReducer = combineReducers({
    subscribers
});

export default AppReducer;