import { SubscribersTypes, Subscriber } from './subscribers.types';
import { action, createAction } from 'typesafe-actions';

// export const getAllRequestStart = () => action(SubscribersTypes.GET_ALL_SUBSCRIBERS_START);
// export const getAllRequestFinish = (subscribers: Array<Subscriber>) => action(SubscribersTypes.GET_ALL_SUBSCRIBERS_FINISH, { subscribers });
// export const subscribersError = (error: any) => action(SubscribersTypes.SUBSCRIBERS_ERROR, error);


export const getAllRequestStart = createAction(SubscribersTypes.GET_ALL_SUBSCRIBERS_START);

export const getAllRequestFinish = createAction(SubscribersTypes.GET_ALL_SUBSCRIBERS_FINISH, resolve => (subscribers: Array<Subscriber>) => resolve(subscribers));

export const subscribersError = createAction(SubscribersTypes.SUBSCRIBERS_ERROR, resolve => (error: any) => resolve(error));
