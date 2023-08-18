function getInputValueById(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldValueString = inputField.value;
    const inputValue = parseFloat(inputFieldValueString);
    return inputValue;
}

function setElementValueById(elementId, element) {
    const showArea = document.getElementById(elementId);
    showArea.innerText = element;
}

function calculateParallelogramArea() {
    const parallelogramBase = getInputValueById('parallelogram-base');
    const parallelogramHeight = getInputValueById('parallelogram-height');

    const area = parallelogramBase * parallelogramHeight;

    setElementValueById('parallelogram-area', area);

}

function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');

    const area = 3.1416 * majorRadius * minorRadius;

    setElementValueById('ellipse-area', area);
}



function calculateTriangleArea() {

    const baseField = document.getElementById('triangle-base');
    const baseValueString = baseField.value;
    const base = parseFloat(baseValueString);

    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const height = parseFloat(heightValueString);

    const area = 0.5 * base * height;

    const showArea = document.getElementById('show-area');
    showArea.innerText = area;
}

function calculateRectangleArea() {

    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueString = widthField.value;
    const width = parseFloat(widthFieldValueString);

    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const length = parseFloat(lengthFieldValueString);

    const area = width * length;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;


    console.log(width, length)
}