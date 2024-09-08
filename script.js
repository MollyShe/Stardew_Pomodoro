let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    if (isRunning) {
        updateTabTitle();  // Update the tab title only if the timer is running
    }
}

function updateTabTitle() {
    if (isRunning) {
        document.title = `Time Left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        document.title = "Pomodoro Timer";  // Default title when the timer is not running
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    isRunning = false;
                    alert("Time's up!");
                    document.title = "Pomodoro Timer";  // Reset the title when the timer ends
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    document.title = "Pomodoro Timer";  // Reset the title when the timer is stopped
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    document.title = "Pomodoro Timer";  // Reset the title when the timer is reset
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();  // Initialize the display with the default title
