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

function insertionSort(colors) {
    for (i = 0; i < colors.length; i++) {
        let key_item = colors[i]
        
        let j = i - 1

        while (j >= 0 && colors[j].value > key_item.value) {
            colors[j + 1] = colors[j]
            j--
        }

        colors[j+1] = key_item
    }

    let sorted = []
    colors.forEach(color => {
        sorted.push(color.color)
    });

    return sorted
}

const red = new Color('red')
const white = new Color('white')
const blue = new Color('blue')
const green = new Color('green')

let unsortedColorsRaw = [blue, blue, green, blue, white, red, white, red]

let unsortedColors = []
unsortedColorsRaw.forEach(color => {
    unsortedColors.push(color.color)
})

let sortedColors = insertionSort(unsortedColorsRaw)
console.log(`Unsorted => ${unsortedColors}\n`)
console.log(`Sorted => ${sortedColors}`)