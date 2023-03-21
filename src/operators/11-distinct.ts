import { from } from 'rxjs';
import { distinct, of } from 'rxjs';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

//Comportamiento normal
// numeros$.subscribe(console.log);

//Comportamiento con un distinct()
numeros$.pipe(
    distinct()
)
.subscribe(console.log);

//El distinct() se maneja con ===, en consecuencia si viene un 1 y '1', deja pasar ambos


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        nombre: 'Megaman'
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

//Comportamiento con distinc
from( personajes ).pipe(
    distinct()
).subscribe(console.log)
//Recordar que aunque el objeto sea identico apuntan a otro espacio en memoria, no es lo mismo

console.log('==============================');

from( personajes ).pipe(
    distinct( p => p.nombre )
).subscribe(console.log)