import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

//ForkJoin
//Uno de los casos mas comunes de usar el forkJoin es para realizar peticiones Ajax
//de manera simultanea

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "facuBarneche";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
}).pipe(
    catchError( err => of(err.message))
).subscribe(console.log);

//En el caso que se quiera salvar la respuesta en el caso de un observable con error
//se puede hacer un pipe luego de la peticion ajax y atrapar el error => 
//catchError( err => of([]));