import {combineEpics} from 'redux-observable';
import { getAllSubscribersEpic } from './Subscribers/subscribers.epic';


export const AppEpic = combineEpics(getAllSubscribersEpic);