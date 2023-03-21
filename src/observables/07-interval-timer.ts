import { interval, timer } from "rxjs"

const hoyEn5s = new Date();
hoyEn5s.setSeconds(hoyEn5s.getSeconds() + 5);

const observer = {
    // next: value => console.log(value),
    next: () => console.log('Pasaron 5 segundos'),
    complete: () => console.log('Complete'),
}

const interval$ = interval(1000);

// const timer$ = timer(2000);

//Funciona como un interval pero arranca a los 2s y emite numeros cada 1s
// const timer$ = timer(2000, 1000);

const timer$ = timer( hoyEn5s );


console.log('Inicio');
//En este caso el complete nunca se va a disparar
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');