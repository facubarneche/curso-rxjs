import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<string> = { //Los 3 parametros del observer
    next: value => console.log('value', value),
    error: error => console.warn('error', error),
    complete: () => console.log('Completado')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Antes del complete');
    
    //Forzar error
    // const a = undefined;
    // a.name = 'Error';

    subs.complete() //Deja de pasar los valores a sus susbscriptores

    subs.next('Luego del complete');
});

obs$.subscribe( observer );

//Otra forma de subscribirse al observable
// obs$.subscribe(resp => console.log(resp))
// obs$.subscribe( console.log );
// obs$.subscribe({
//     next: (value) => console.log(value),
//     error: (error) => console.warn(error),
//     complete: () => console.log('Completado')
// });
