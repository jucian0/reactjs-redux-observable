import React, { useState, useEffect } from 'react';
import { SubscribersState, Subscriber } from './store/Subscribers/subscribers.types';

import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import * as actions from './store/Subscribers/subscriners.action';

type Action = ActionType<typeof actions>;


const Comp = (props: any) => {

    const subscribers = useSelector((state: any) => state.subscribers.subscribers)

    return (
        <div>
            <h3>Alo Brasil</h3>
            <button onClick={props.getAllRequestStart}>Get All</button>

            <div>
                <ul>
                    {
                        subscribers.map((subscriber: Subscriber) => (
                            <li key={subscriber.subscriberId}>{subscriber.subscriberName}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    subscribers: state.subscribers
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: any) => bindActionCreators(
    actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
