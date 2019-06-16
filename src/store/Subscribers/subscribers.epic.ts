import { Subscriber } from './subscribers.types';
import { map, catchError, filter, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ActionType, isActionOf } from 'typesafe-actions';
import * as actions from './subscriners.action';
import axios, { AxiosResponse } from 'axios'


const url: string = 'http://localhost:8088/event-manager/v1/subscribers';

const getAllSubscribersEpic = (action$: any) =>

    action$.pipe(
        filter(isActionOf(actions.getAllRequestStart)),
        switchMap(() =>
            from(axios.get(url))
                .pipe(
                    map((response: AxiosResponse) => response.data),
                    map((data: Array<Subscriber>) => actions.getAllRequestFinish(data)),
                    catchError(error => of(actions.subscribersError(error)))
                )
        )
    )




export {
    getAllSubscribersEpic
}
