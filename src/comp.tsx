import React, { useState, useEffect, useCallback } from 'react';
import { SubscribersState, Subscriber, SubscribersTypes } from './store/Subscribers/subscribers.types';

import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import wrapActionCreators,{ connect, useSelector, useDispatch, useStore } from 'react-redux';
import * as actions from './store/Subscribers/subscribers.action';
import MaterialTable from 'material-table';
import { useAction } from './hooks/useActions';

type Action = ActionType<typeof actions>;


const Comp: React.FC<any> = (props) => {

    const subscribers = useSelector((state: any) => state.subscribers.subscribers)

    
    return (
        <div>
            <h3>Alo Brasil</h3>
            <button onClick={props.getAllRequestStart}>Get All</button>

            <div style={{width: 900, marginLeft:100}}>
                <MaterialTable
                    title="Basic Sorting Preview"
                    columns={[
                        { title: 'ID', field: 'id', type:'string' },
                        { title: 'Title', field: 'title.rendered', type:'string' },
                        { title: 'Status', field: 'status', type: 'string'},
                        { title: 'Link', field: 'link', type: 'string'}
                    ]}
                    data={subscribers}
                
                />
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch: Dispatch<Action>) => bindActionCreators(
    actions, dispatch);

export default connect(()=>({}), mapDispatchToProps)(Comp);
