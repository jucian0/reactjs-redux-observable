import { Subscriber, SubscribersTypes } from './subscribers.types';
import { map, catchError, filter, switchMap } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import * as actions from './subscribers.action';
import axios, { AxiosResponse } from 'axios'

const url: string = 'http://www.hackintoshworld.com/wp-json/wp/v2/posts';


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
