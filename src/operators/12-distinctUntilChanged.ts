import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged} from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

//Comportamiento normal
// numeros$.subscribe(console.log);

//Comportamiento con un distinctUntilChanged()
numeros$.pipe(
    distinctUntilChanged()
)
.subscribe(console.log);

//El distinctUntilChanged() se maneja con ===, en consecuencia si viene un 1 y '1', deja pasar ambos


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Pedrito'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
];

//Comportamiento normal
from( personajes ).subscribe(console.log)

console.log('==============================');

//Comportamiento con distinctUntilChanged
from( personajes ).pipe(
    distinctUntilChanged()
).subscribe(console.log)
//Recordar que aunque el objeto sea identico apuntan a otro espacio en memoria, no es lo mismo

console.log('==============================');

from( personajes ).pipe(
    //Bloquea cuando la condición es verdadera
    distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
).subscribe(console.log)