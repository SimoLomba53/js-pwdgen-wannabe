//NOME

let nome = prompt('Come ti chiami?');
console.log(nome);

//COGNOME

let surname = prompt('Il tuo cognome?');
console.log(surname);

//COLORE PREFERITO

let color = prompt('Il tuo colore preferito?');
console.log(color);

//CALCOLO PASSWORD
let password = nome + surname + color;
console.log(password);

const welcome_msg =`la tua password è: ${nome}${surname}${color}`;

const welcome_title=document.getElementById('welcome');
welcome_title.innerHTML=welcome_msg;