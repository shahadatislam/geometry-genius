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