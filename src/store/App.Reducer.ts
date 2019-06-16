import {combineReducers} from 'redux';
import subscribersReducer from './Subscribers/subscribers.reducer';

const AppReducer = combineReducers({
    subscribersReducer
});

export default AppReducer;