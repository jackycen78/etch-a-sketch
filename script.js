let currentMode = 'Select Color'
const DEFAULT_SIZE = 16

const colorPicker = document.querySelector('#colorPicker')
const random = document.querySelector('#random')
const eraser = document.querySelector('#eraser')
const clear = document.querySelector('#clear')
const sizeSlider = document.querySelector('#sizeRange')
const sizeDisplay = document.querySelector('#sizeDisplay')
const grid = document.querySelector('#grid')

updateSizeDisplay(DEFAULT_SIZE)
updateGridSize(DEFAULT_SIZE)

sizeSlider.onmousemove = (e) => updateSizeDisplay(e.target.value)
sizeSlider.onchange = () => clearGrid()

colorPicker.addEventListener('click', switchToSelectColor)
eraser.addEventListener('click', switchToEraser)
clear.addEventListener('click', clearGrid)
random.addEventListener('click', switchToRandom)

function updateSizeDisplay(newSize){
    sizeDisplay.innerHTML = newSize + ' x ' + newSize;
}

function changeColor(e){
    if (currentMode == 'Select Color'){
        e.target.style.backgroundColor = colorPicker.value
    }
    else if (currentMode == 'Eraser'){
        e.target.style.backgroundColor = 'white'
    }
    else if (currentMode == 'Random'){
        let red = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    }
}

function updateGridSize(newSize){
    for (i = 0; i < newSize * newSize ; i++){
        grid.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${newSize}, 1fr)`
        box = document.createElement("div")
        box.addEventListener('mouseover', changeColor)
        grid.appendChild(box)
    }
}

function switchToSelectColor(){
    currentMode = 'Select Color'
}


function switchToRandom(){
    currentMode = 'Random'
}

function switchToEraser(){
    currentMode = 'Eraser'
}

function clearGrid(){
    grid.innerHTML = ''
    updateGridSize(sizeSlider.value)
}

