export enum SubscribersTypes{
    GET_ALL_SUBSCRIBERS_START = '@SUBSCRIBERS/GET_ALL_START',
    GET_ALL_SUBSCRIBERS_FINISH = '@SUBSCRIBERS/GET_ALL_FINISH',
    SUBSCRIBERS_ERROR = '@SUBSCRIBERS/ERROR'
}

export interface Subscriber{
    id:number,
    title: string
}

export interface SubscribersState{
    subscribers: Array<Subscriber>,
    loading: boolean,
    error: any
}
