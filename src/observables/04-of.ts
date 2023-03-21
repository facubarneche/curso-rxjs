import { Observer } from 'rxjs';
import { of } from 'rxjs';

//OF
//Permite crear observables en base de una lista de elementos

// const obs$ = of(1,2,3,4,5,6);
const obs$ = of(...[1,2,3,4,5,6],7,8,9);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');
const observer: Observer<any> = { //Los 3 parametros del observer
    next: value => console.log('next', value),
    error: null,
    complete: () => console.log('Terminamos la secuencia')
};

obs$.subscribe( observer )

console.log('Fin del Obs$');
//Podemos ver como el observable es SINCRONO