import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap ( x => console.log('antes', x)),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('despues', valor),
        complete: () => console.log('Se terminó todo')
    })
).subscribe(val => console.log( 'subs', val ));

//El tap es muy útil para depurar