import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = { //Los 3 parametros del observer
    next: value => console.log('value', value),
    error: error => console.warn('error', error),
    complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {
    //crear contador: 1,2,3,4,5.....
    let i = 0;

    const interval = setInterval( () => {
        //cada seg.
        i++;
        subscriber.next(i);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
});

const subs = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );

//El add es una buena forma para desuscribirse de todos los subscribe sin tener que hacer de desusbscribción uno por uno
subs.add(subs2)
subs.add(subs3)

setTimeout(() => {
    subs.unsubscribe();
}, 5000)