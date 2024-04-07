function calculateTriangle() {
    const base = inputValueById('triangle-base');
    const height = inputValueById('triangle-height')
    const area = base * height * 0.5;
    setInnerText('triangle-id', area)
}
function calculateRectangle() {
    const base = inputValueById('rectangle-base');
    const height = inputValueById('rectangle-height')
    const area = base * height;
    setInnerText('rectangle-id', area)
}
function calculateParallelogram() {
    const base = inputValueById('parallelogram-base');
    const height = inputValueById('parallelogram-height')
    const area = base * height;
    setInnerText('parallelogram-id', area)
}
function calculateRhombus() {
    const base = inputValueById('rhombus-base');
    const height = inputValueById('rhombus-height')
    const area = base * height * 0.5;
    setInnerText('rhombus-id', area)
}
function calculatePentagon() {
    const base = inputValueById('pentagon-base');
    const height = inputValueById('pentagon-height')
    const area = base * height * 0.5;
    setInnerText('pentagon-id', area)
}
function calculateEllipse() {
    const base = inputValueById('ellipse-base');
    const height = inputValueById('ellipse-height')
    const area = base * height * 3.1415;
    setInnerText('ellipse-id', area)
}
// function to get input
function inputValueById(inputValue) {
    const Value = parseFloat(document.getElementById(inputValue).value);
    return Value;
}
// function to set text
function setInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = (area);
}