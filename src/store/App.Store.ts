import { SubscribersState } from './Subscribers/subscribers.types';
import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AppEpic } from './App.Epic';
import AppReducer from './App.Reducer';
import * as actions from './Subscribers/subscriners.action';
import { ActionType } from 'typesafe-actions';
import { composeWithDevTools } from "redux-devtools-extension";


export interface ApplicationState {
    subscribers: SubscribersState
}



const INITIAL_STATE: SubscribersState = {
    subscribers: [],
    loading: false,
    error: null
};


const initialStateApp:ApplicationState = {
    subscribers: INITIAL_STATE
}

type Action = ActionType<typeof actions>;

const epicMiddleware = createEpicMiddleware<Action, Action, ApplicationState>();







const composeEnhancers = composeWithDevTools({});

function configureStore(preloadedState: any) {
   const store = createStore(
      AppReducer,
      preloadedState,
      composeEnhancers(
         applyMiddleware(
            epicMiddleware
         )
      )
   );

   return store;
}


const store = configureStore(initialStateApp);



epicMiddleware.run(AppEpic)

export default store;