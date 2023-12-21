// javascript of question 19

var firstvalue = document.getElementById('first_value');
var secondvalue = document.getElementById('second_value');
var an = document.getElementById('answer');

function add() {
    an.value = parseInt(firstvalue.value) + parseInt(secondvalue.value);
    document.getElementById('answer').innerHTML = (an.value);
}

function sub() {
    an.value = parseInt(firstvalue.value) - parseInt(secondvalue.value);
    document.getElementById('answer').innerHTML = (an.value);
}

function mul() {
    an.value = parseInt(firstvalue.value) * parseInt(secondvalue.value);
    document.getElementById('answer').innerHTML = (an.value);
}

function div() {
    an.value = parseInt(firstvalue.value) / parseInt(secondvalue.value);
    document.getElementById('answer').innerHTML = (an.value);
}

function mod() {
    an.value = parseInt(firstvalue.value) % parseInt(secondvalue.value);
    document.getElementById('answer').innerHTML = (an.value);
}