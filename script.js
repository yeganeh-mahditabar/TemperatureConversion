let $ = document;

const firstValue = $.querySelector('.C');
const secondValue = $.querySelector('.F');
const converter = $.querySelector('#converter');
const result = $.querySelector('.result');
const convertButton = $.querySelector('.convertButton');
const resetButton = $.querySelector('.resetButton');
const changeButton = $.querySelector('.changeButton');

function convert() {
    console.log('convert')
}
function reset() {
    console.log('reset')
}
function swap() {
    if(firstValue.innerHTML === '°C') {
        firstValue.innerHTML = '°F';
        secondValue.innerHTML = '°C';
        converter.setAttribute('placeholder', '°F');
        document.title = '°F to °C';
    } else {
        firstValue.innerHTML = '°C';
        secondValue.innerHTML = '°F';
        converter.setAttribute('placeholder', '°C');
        document.title = '°C to °F';
    }
}

convertButton.addEventListener('click', convert);
resetButton.addEventListener('click', reset);
changeButton.addEventListener('click', swap);