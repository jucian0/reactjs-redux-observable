import {combineReducers} from 'redux';
import {subscribersReducer as subscribers} from './Subscribers/subscribers.reducer';

const AppReducer = combineReducers({
    subscribers
});

export default AppReducer;