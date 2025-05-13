'use strict'
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-timer');
const stopButton = document.getElementById('stop-timer');
const resetButton = document.getElementById('reset-timer');


console.log(typeof timerDisplay)

var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;
var isRunning = false;

function start() {
    if (isRunning) return; 
    isRunning = true;
    function mywork() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }

    timer = setInterval(mywork, 1000);

}

function stop() {
    clearInterval(timer);
    isRunning = false;
   stop()
    
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    

    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    start()
}

function updateDisplay() {
    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    timerDisplay.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

updateDisplay();

startButton.addEventListener('click',()=>{
    startButton.style.backgroundColor = 'rgb(42, 41, 41)';
    stopButton.style.backgroundColor = 'rgb(200, 199, 199)';
    resetButton.style.backgroundColor = 'rgb(200, 199, 199)';
    startButton.style.color='white';
    stopButton.style.color='black';
    resetButton.style.color='black';
})

stopButton.addEventListener('click',()=>{
    startButton.style.backgroundColor = 'rgb(200, 199, 199)';
    stopButton.style.backgroundColor = 'rgb(34, 34, 34)';
    resetButton.style.backgroundColor = 'rgb(200, 199, 199)';
    startButton.style.color='black';
    stopButton.style.color='white';
    resetButton.style.color='black';
    
})

resetButton.addEventListener('click',()=>{
    resetButton.style.backgroundColor = 'rgb(42, 41, 41)';
    startButton.style.backgroundColor = 'rgb(200, 199, 199)';
    stopButton.style.backgroundColor = 'rgb(200, 199, 199)';
    startButton.style.color='black';
    stopButton.style.color='black';
    resetButton.style.color='white';
})
 


// JavaScript counts months from 0 to 11
// const a = new Date();
// console.log(a);
// const b = new Date("2022-03-25");
 
// console.log(b);

// const c = new Date(2025,11,12,0,33,55,0);
// console.log(c);

// const d = new Date(99, 11, 24);
// Clg

async function startAsyncops() {
    const data = await promisify(2000)
    console.log('hello 1')
    await promisify(3000)
    await promisify(3000)
    await promisify(3000)
    await promisify(3000)
    await promisify(3000)
    await promisify(3000)
    await promisify(3000)

}
