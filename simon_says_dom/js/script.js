//definizio variabili e,delle funzioni e recupero elementi dom
//recupero elementi dom che mi servono
const form = document.getElementById('answers-form');
const inputField = document.querySelector('input');
const countdown = document.getElementById('countdown');
const numberList = document.getElementById('numbers-list');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');

//definisco variabili
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 10;
let li = '';

//definisco funzioni
//funzione per generare numeri casuali
const generateRandomNumber = (min, max, tot) => {
    //creo un array vuoto
    const numbers = [];
    //ciclo per generare numeri casuali
    while (numbers.length < tot) {
        //genero un numero casuale
        const num = Math.floor(Math.random() * (max - min + 1) + min);
        //verifico che il numero non sia già presente
        if (!numbers.includes(num)) {
            //inserisco numero generato nell'array
            numbers.push(num);
        }
    }
    return numbers;
};

//genero numeri casuali invocando la funzione
const randomNumbers = generateRandomNumber(min, max, totalNumbers);

//mostro numeri generati
for (let i = 0; i < randomNumbers.length; i++) {
    li += `<li>${randomNumbers[i]}</li>`;
}
numberList.innerHTML = li;

console.log(randomNumbers);

//mostro nel dom il timer
countdown.innerText = time;

//faccio partire il countdown
const timer = setInterval(() => {
    countdown.innerText = --time;
    if (time === 0) {
        clearInterval(timer);
        form.classList.remove = 'd-none';
        numberList.classList.add('d-none');
        message.innerText = 'Tempo scaduto!';
        //inserisci i numeri che ricordi
        instructions.innerText = 'Inserisci i numeri che ricordi';
    }
}, 1000);

