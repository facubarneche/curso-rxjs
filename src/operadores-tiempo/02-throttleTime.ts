import { throttleTime, distinctUntilChanged, fromEvent, map, pluck, asyncScheduler } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

// click$.pipe(
//     throttleTime(3000)
// ).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    // throttleTime(1000), //Por defecto
    //Para obtener la primer y ultima key
    throttleTime(1000, asyncScheduler,{
        leading: true,
        trailing: true,
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log )