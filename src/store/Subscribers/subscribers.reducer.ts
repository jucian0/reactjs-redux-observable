import { SubscribersState, SubscribersTypes } from "./subscribers.types";
import { Reducer } from "redux";


const INITIAL_STATE: SubscribersState = {
    subscribers: [],
    loading: false,
    error: null
};

const subscribersReducer: Reducer<SubscribersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SubscribersTypes.GET_ALL_SUBSCRIBERS_FINISH:
            return { ...state, loading: false, error: null, subscribers: action.payload }
        case SubscribersTypes.SUBSCRIBERS_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return { ...state }
    }
}


export default subscribersReducer;