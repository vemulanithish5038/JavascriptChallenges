let display = document.getElementById('display');


// history.pushState({id:1},'','calculator')
// history.replaceState({id:2},'','calculator/value')


function appendToDisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}

function clearvaluedisplay() {
    display.value = display.value.slice(0, -1);
}