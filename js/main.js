// Install Node.js to run on the terminal
class Color {
    constructor(color) {
        this.color = {
            'red': '❤️ ', 
            'white': '⚪ ',
            'blue': '🔷 ',
            'green': '🍀 ',
        }[color]

        this.value = {
            'red': 0, 
            'white': 1,
            'blue': 2,
            'green': 3,
        }[color]
    }
}

function showTrueColors(colors) {
    let trueColors = []
    colors.forEach(color => {
        trueColors.push(color.color)
    })

    return trueColors
}

function insertionSort(colors) {
    colorsCopy = Array.from(colors) // To keep the integrity of the original
    for (i = 0; i < colorsCopy.length; i++) {
        let key_item = colorsCopy[i]
        
        let j = i - 1

        while (j >= 0 && colorsCopy[j].value > key_item.value) {
            colorsCopy[j + 1] = colorsCopy[j]
            j--
        }

        colorsCopy[j+1] = key_item
    }

    return colorsCopy
}

const red = new Color('red')
const white = new Color('white')
const blue = new Color('blue')
const green = new Color('green')

const unsortedColorsRaw = [blue, blue, green, blue, white, red, white, red]
const unsortedColors = showTrueColors(unsortedColorsRaw)

const sortedColorsRaw = insertionSort(unsortedColorsRaw)
const sortedColors = showTrueColors(sortedColorsRaw)

console.log(`Unsorted => ${unsortedColors}\n`)
console.log(`Sorted => ${sortedColors}`)