import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { SubscribersTypes, SubscribersState } from './store/Subscribers/subscribers.types';

import { ActionType } from 'typesafe-actions';
import { Dispatch,bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './store/Subscribers/subscriners.action';
import Comp from './comp';

type Action = ActionType<typeof actions>;


const App: React.FC = (props) => {

  return (

        <Comp/>
  );
}
export default App;