// Function to calculate the area of a triangle
function calculateTriangle() {
    // Retrieve the base and height input values
    const base = inputValueById('triangle-base');
    const height = inputValueById('triangle-height');
    
    // Calculate the area of the triangle
    const area = base * height * 0.5;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('triangle-id', area);
}

// Function to calculate the area of a rectangle
function calculateRectangle() {
    // Retrieve the base and height input values
    const base = inputValueById('rectangle-base');
    const height = inputValueById('rectangle-height');
    
    // Calculate the area of the rectangle
    const area = base * height;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('rectangle-id', area);
}

// Function to calculate the area of a parallelogram
function calculateParallelogram() {
    // Retrieve the base and height input values
    const base = inputValueById('parallelogram-base');
    const height = inputValueById('parallelogram-height');
    
    // Calculate the area of the parallelogram
    const area = base * height;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('parallelogram-id', area);
}

// Function to calculate the area of a rhombus
function calculateRhombus() {
    // Retrieve the base and height input values
    const base = inputValueById('rhombus-base');
    const height = inputValueById('rhombus-height');
    
    // Calculate the area of the rhombus
    const area = base * height * 0.5;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('rhombus-id', area);
}

// Function to calculate the area of a pentagon
function calculatePentagon() {
    // Retrieve the base and height input values
    const base = inputValueById('pentagon-base');
    const height = inputValueById('pentagon-height');
    
    // Calculate the area of the pentagon
    const area = base * height * 0.5;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('pentagon-id', area);
}

// Function to calculate the area of an ellipse
function calculateEllipse() {
    // Retrieve the base and height input values
    const base = inputValueById('ellipse-base');
    const height = inputValueById('ellipse-height');
    
    // Calculate the area of the ellipse
    const area = base * height * 3.1415;
    
    // Set the calculated area as inner text of the specified element
    setInnerText('ellipse-id', area);
}

// Function to get input value by ID and set it to 0
function inputValueById(inputValue) {
    // Retrieve the value of the input element by ID
    const value = parseFloat(document.getElementById(inputValue).value);
    
    // Set the value of the input element to an empty string (i.e., 0)
    document.getElementById(inputValue).value = '';
    
    // Return the retrieved value
    return value;
}

// Function to set inner text of an element by ID
function setInnerText(elementId, area) {
    // Find the element by its ID
    const element = document.getElementById(elementId);
    
    // Set the inner text of the element to the calculated area
    element.innerText = (area);
}
