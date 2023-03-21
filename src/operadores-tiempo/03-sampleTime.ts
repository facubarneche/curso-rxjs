import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({ x, y }))
).subscribe( console.log )