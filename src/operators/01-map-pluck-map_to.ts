import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators"

range(1,5).pipe(
    map<number, number>( val => val * 10 )
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupMap$ = keyup$.pipe(
    map( event => event.code )
);

const keyupPluck$ = keyup$.pipe(
    pluck( 'code')
);

const keyupPluck2$ = keyup$.pipe(
    pluck( 'target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);
 
keyup$.subscribe( console.log );
keyupMap$.subscribe( code => console.log( 'map', code ));
keyupPluck$.subscribe( code => console.log( 'pluck', code ));
keyupPluck2$.subscribe( code => console.log( 'pluck', code ));
keyupMapTo$.subscribe( code => console.log( 'mapTo', code ));