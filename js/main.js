/* TASK PASSWORD GENERATOR */

// 1. ask user name
const name = prompt("What's your name?");
console.log(name);
console.log(typeof name)

// 2. ask user surname
const surname = prompt("What's your surname?");

// 3. chiedi colore preferito utente
const favcolor = prompt("What's your favourite color?");

// 4. stampa a video: NomeCognomeColore21
document.getElementById('password').innerHTML =
// name + surname + favcolor + '21';
`${name}${surname}${favcolor}21`;