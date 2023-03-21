import { Subject, interval } from 'rxjs';
import { take, map, share } from 'rxjs/operators';
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

  // == NO TOCAR este bloque ====================
  const reloj$ = interval(1000).pipe(
    take(5),
    map( val => Math.round(Math.random() * 100) ),
    //share(), esta forma sería una nueva forma de hacer lo que pide el ejercicio, pero en este caso no se puede tocar este bloque
  );
  // No tocar la creación del observable
  // ============================================

    
  const subject$ = new Subject();

  reloj$.subscribe( subject$ );
  
  // Estos dos observables deben de emitir exactamente los mismos valores
  subject$.subscribe( val => console.log('obs1', val) );
  subject$.subscribe( val => console.log('obs2', val) );





})();

		