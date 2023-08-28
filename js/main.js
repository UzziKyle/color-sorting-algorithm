// Install Node.js to run on the terminal
class Color {
    constructor(color) {
        this.name = color
        this.visual = {
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


class ColorsArray {
    constructor(length) {
        this.length = length
        this.colors = randomColorsGenerator(num=this.length)
    }

    sort() {
        let colorsCopy = Array.from(this.colors)

        let sortedColors = []
        let num = 0
        while (sortedColors.length != this.length) {
            let groupedColors = []
            colorsCopy.forEach(color => {
                if (color.value == num) {
                    groupedColors.push(color)
                }
            })
            sortedColors.push(...groupedColors)
            num++
        }

        return sortedColors
    }
}


function showTrueColors(colorsArray) {
    let trueColors = []
    colorsArray.forEach(color => {
        trueColors.push(color.visual)
    })

    return trueColors
}


function randomColorsGenerator(num, min = 2) {
    let colors = [new Color('red'), new Color('white'), new Color('blue'), new Color('green')] 

    if (num <= colors.length) {
        if (num < min) {
            num = min
        }

        shuffleArray(colors)

        randomColors = []
        for (let i = 0; i < num; i++) {
            randomColors.push(colors[i])
        }

        return randomColors
    }

    randomColors = []
    colors.forEach(color => {
        randomColors.push(color)
    })

    let remainingSlots = num - randomColors.length
    for (let i=0; i < remainingSlots; i++) {
        let randomIndex = Math.floor(Math.random() * (colors.length-1))
        let newColor = colors[randomIndex]
        randomColors.push(newColor)
    }

    shuffleArray(randomColors)

    return randomColors
}


// src code -> https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter number of colors: ', length => {
    let colors = new ColorsArray(num=length)
    let emojiOnlyUnsorted = showTrueColors(colors.colors)
    let emojiOnlysorted = showTrueColors(colors.sort())

    console.log(`Unsorted => ${emojiOnlyUnsorted}\n`)
    console.log(`Sorted => ${emojiOnlysorted}`)

    readline.close()
})