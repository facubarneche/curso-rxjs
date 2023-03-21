import { delay, forkJoin, interval, of, take } from "rxjs";


// ForkJoin

// Devuelve como resultado la respuesta del ultimo elemento todos los observers con la 
// particularidad que si la respuesta es enviada cuando se completan todos los observers, 
// la respuesta se devuelve en forma de Array, al menos que se configure para que se devuelva 
// como Objeto

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3)); //0..1..2
const letras$ = of("a", "b", "c").pipe(delay(3500)); 

// forkJoin( numeros$, intervalo$, letras$ ).subscribe( console.log )

// forkJoin( numeros$, intervalo$, letras$ ).subscribe( resp => {
//     console.log('numeros: ', resp[0]);
//     console.log('intervalo: ', resp[1]);
//     console.log('letras: ', resp[2]);
// });

//Al envolver los parametros del forkJoin como objeto es mas facil devolver la respuesta
// forkJoin({ numeros$, intervalo$, letras$ }).subscribe( resp => {
//     console.log( resp );
// });

//De esta forma se puede cambiar el nombre de las variables de la respuesta
forkJoin({ 
    num: numeros$, 
    int: intervalo$, 
    let: letras$ 
}).subscribe( resp => {
    console.log( resp );
});