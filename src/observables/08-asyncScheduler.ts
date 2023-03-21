import { asyncScheduler } from "rxjs";

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hola Mundo");
asyncScheduler.schedule(saludar, 2000);

const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
asyncScheduler.schedule(saludar2, 2000, "Facundo"); //El estado es el argumento (solo 1 argumento: string, number, object, array pero solo 1)

//No puede ser una arrow function
const subs = asyncScheduler.schedule(function (state) {
    console.log('state: ', state);
    this.schedule(state + 1, 1000);
}, 5000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
//     console.log('Fin de la subscripción');
// }, 11000);

asyncScheduler.schedule(()=> subs.unsubscribe(), 11000);