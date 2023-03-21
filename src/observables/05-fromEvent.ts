import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: object = {
    next: value => console.log('next: ', value)
}

// src1$.subscribe( event => {
//     console.log(event.x);
//     console.log(event.y);
// } );

src1$.subscribe( ({x, y}) => {
    console.log(x);
    console.log(y);
} );

src2$.subscribe( event => {
    console.log( event.key )
});