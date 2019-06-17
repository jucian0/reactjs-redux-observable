import { SubscribersState } from './Subscribers/subscribers.types';
import { createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { AppEpic } from './App.Epic';
import AppReducer from './App.Reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { INITIAL_STATE as subscribers } from './Subscribers/subscribers.reducer';


export interface ApplicationState {
   subscribers: SubscribersState
}

const initialStateApp: ApplicationState = {
   subscribers
}


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = composeWithDevTools({});

const configureStore = (preloadedState: ApplicationState) =>
   createStore(
      AppReducer,
      preloadedState,
      composeEnhancers(
         applyMiddleware(
            epicMiddleware
         )
      )
   );

const store = configureStore(initialStateApp);

epicMiddleware.run(AppEpic)

export default store;