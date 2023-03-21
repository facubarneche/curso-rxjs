import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

//Javascript
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number ) => {
    return acumulador + valorActual
}

const total = numbers.reduce(totalReducer, 0);

console.log('total arr', total);

interval(1000).pipe(
    take(3),//Toma los primeros X numeros recibidos por parametros
    tap( console.log ),
    reduce( totalReducer )
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})
