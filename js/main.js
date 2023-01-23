//TRACCIA:
// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito,
// infine scrivi sulla pagina nomecognomecolorepreferito23

// PASSAGGI:

// chiedere nome utente
const userName = prompt("Inserisci Nome");
console.log(userName);

// chiedere cognome utente
const userSurname = prompt("Inserisci Cognome");
console.log(userSurname);

// chiedere colore preferito utente
const favColor = prompt("Inserisci colore preferito");
console.log(favColor);

// generare password visibile in pagina
const userPwd = (userName + userSurname + favColor + "23");
console.log("User Password", userPwd);
document.getElementById("Pwd").innerHTML = ("Password generate = " + userPwd);