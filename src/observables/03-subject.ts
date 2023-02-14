import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = { //Los 3 parametros del observer
    next: value => console.log('value', value),
    error: error => console.warn('error', error),
    complete: () => console.log('Completado')
};

const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(()=>{
        subs.next( Math.random() )
    }, 1000);

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido');
    };
});

// const subs1 = intervalo$.subscribe(random => console.log('subs1: ', random))
// const subs2 = intervalo$.subscribe(random => console.log('subs2: ', random))

/**
 * 1- Casteo múltiple
 * 2- Es un observer
 * 3- Next, error, complete
*/

const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

//Cuando la data producida por el Obsservable es producida dentro de si es conocido como Cold Observable pero cuando la data es producida fuera Hot Observable

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);

//Si no se hace el unsubscribe siempre va a seguir susbscrito generando acciones en background