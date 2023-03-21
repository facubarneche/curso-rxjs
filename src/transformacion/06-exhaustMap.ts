import { exhaustMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(
    take(3)
);

const click$ = fromEvent( document, 'click' );

click$.pipe(
    // switchMap( () => interval$ )
    // concatMap( () => interval$ )
    exhaustMap( () => interval$ )
).subscribe( console.log )

// El concatMap ejecuta el primer obsevarble pero si se ejecuta otro observable encola los valores
// para cuando termine el primer observable concatena luego los valores del siguiente observable