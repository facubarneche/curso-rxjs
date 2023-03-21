import { first, map, take, tap } from "rxjs/operators";
import { fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    // take(1) //Toma el primer valor y completa la subscripción
    //first() //Toma el primer valor y completa la subscripción
    tap<MouseEvent>(console.log), //Debugea

    // map( event => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX
    // }))

    map(({clientX, clientY}) => ({ clientY, clientX })),

    first( event => event.clientY >= 150 ) //First con condición
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
