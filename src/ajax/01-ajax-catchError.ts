import { of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (respuesta: Response) => {
  if (!respuesta.ok) {
    throw new Error(respuesta.statusText);
  }
  return respuesta;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// fetchPromesa
// .then( manejaErrores )
// .then( resp => resp.json() )
// .then( console.log )
// .catch( err => console.warn('error en usuarios', err) )

//Sin lanzar un throw new Error, el catch no atrapará el error.

ajax(url)
  .pipe(
    map(({ response }) => response),
    catchError( atrapaError )
  )
  .subscribe((users) => console.log("usuarios: ", users));
