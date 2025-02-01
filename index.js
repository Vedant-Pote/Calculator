function appendToDisplay(value) {
    document.getElementById('display').value += value ;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
       display.value = eval(display.value);     
    } 
    catch (error) {
        display.value = 'Error';
    }
}