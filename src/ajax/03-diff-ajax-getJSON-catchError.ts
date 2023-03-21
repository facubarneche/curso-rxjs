import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

const manejaError = (err: AjaxError) => {
    console.warn('error', err.message );
    return of({
        ok: false,
        usuarios: [],
    })
}

//Diferencias entre el ajax.getJSON y el ajax
// const obs$ = ajax.getJSON( url).pipe(
//     catchError( manejaError )
// );
// const obs2$ = ajax( url ).pipe(
//     catchError( manejaError )
// );

const obs$ = ajax.getJSON( url);
const obs2$ = ajax( url );

// obs$.subscribe( data => console.log('ajax.getJSON: ', data));
// obs2$.subscribe( data => console.log('ajax: ', data));

obs$.subscribe( {
    next: value => console.log('next: ', value),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('complete')
} );

obs2$.pipe(
    catchError( manejaError )
)
.subscribe( {
    next: value => console.log('next: ', value),
    error: err => console.warn('error en subs: ', err),
    complete: () => console.log('complete')
} );
