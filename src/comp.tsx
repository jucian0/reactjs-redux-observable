import React from 'react';
import { useDispatch } from 'react-redux';
import { SubscribersTypes, SubscribersState } from './store/Subscribers/subscribers.types';

import { ActionType } from 'typesafe-actions';
import { Dispatch,bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './store/Subscribers/subscriners.action';
type Action = ActionType<typeof actions>;


const Comp =  (props:any) =>{

    return (
        <div>
            <h3>Alo Brasil</h3>
            <button onClick={props.getAllRequestStart}>Get All</button>
        </div>
    )

}



const mapStateToProps = (state: SubscribersState) => ({
    subscribers : state.subscribers
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<Action>, props: any) => bindActionCreators(
   actions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Comp);
