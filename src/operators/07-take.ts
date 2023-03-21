import { take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap ( t => console.log( 'tap', t) ),
    //El take cancela la subscripción
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});