//definizio variabili e,delle funzioni e recupero elementi dom
//recupero elementi dom che mi servono
constform = document.getElementById('answers-form');
const inputField = document.querySelector('input');
const countdown = document.getElementById('countdown');
const numberList = document.getElementById('numbers-List');
constmessage - document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');
//definisco variabili
const min = 1;
const max = 50;
const totalNumbers = 5;
const time = 10;
//definisco funzioni
//funzione per generare numeri casuali
const generateRandomNumber = (min,max,tot) => {
    //creo un array vuoto
    const numbers = [];
    //ciclo per generare numeri casuali
    for(let i = 0; i < tot; i++) {
       //genero un numero casuale 
       const mum = Math.floor(Math.random() * (max - min + 1) + min);
       //inserisco numero generato nellarray restituisco numero
         numbers.push(num);
    }
    return numbers;
}
console.log(generateRandomNumber(1,50,5));