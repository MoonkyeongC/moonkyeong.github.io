const counter = document.getElementById('counter');
let currValue = Number(counter.textContent);

function tickUp() {
    currValue++;
    counter.textContent = currValue;
}

function tickDown() {
    currValue--;
    counter.textContent = currValue;
}

function runForLoop() {
    let text = "";
    for (let i = 0; i <= currValue; i++) {
        text += i + " ";
    }
    document.getElementById("forLoopResult").textContent = text;
}

function showOddNumbers() {
    let text = "";
    for (let i = 0; i <= currValue; i++) {
        i += 1;
        text += i + " ";
    }
    document.getElementById("oddNumberResult").textContent = text;
}

function addMultiplesToArray() {
    let array = [];
    for (let i = currValue; i >= 5; i--) {
        if(i % 5 == 0) {
            array.push(i);
        }
    }
    console.log(array);
}

function printCarObject() {
    const type = document.getElementById("carType").value;
    const mpg = document.getElementById("carMPG").value;
    const color = document.getElementById("carColor").value;
    const car = {cType:type, cMPG:mpg, cColor:color};
    console.log(car);
}

function loadCar(carNumber) {
    let selectedCar;
    if (carNumber == 1) {
        selectedCar = carObject1;
    }
    if (carNumber == 2) {
        selectedCar = carObject2;
    }
    if (carNumber == 3) {
        selectedCar = carObject3;
    }
    console.log(selectedCar);
}

function changeColor(color) {
    let selectedColor;
    const text = document.getElementById("styleParagraph");
    if (color == 1) {
        text.style.color = "red";
    }
    if (color == 2) {
        text.style.color = "green";
    }
    if (color == 3) {
        text.style.color = "blue";
    }
}