# Thank you, Jian!
from random import randint


class Color:
    def __init__(self, color) -> None:
        self.color = {
            'red': '❤️ ', 
            'white': '⚪ ',
            'blue': '🔷 ',
            'green': '🍀 ',
        }[color]

        self.value = {
            'red': 0, 
            'white': 1,
            'blue': 2,
            'green': 3,
        }[color]

    def __str__(self) -> str:
        return self.color
    
    def __repr__(self) -> str:
        return self.color
    

def sort_colors(colors=list) -> list: # insertion-sort algorithm
    colors_copy = colors.copy()
    for i in range(1, len(colors_copy)):
        key_item = colors_copy[i]

        j = i - 1

        while j >= 0 and colors_copy[j].value > key_item.value:
            colors_copy[j + 1] = colors_copy[j]
            j -= 1

        colors_copy[j+1] = key_item

    return [color for color in colors_copy]

def rand_colors_generator(num=10) -> list:
    colors = [Color('red'), Color('white'), Color('blue'), Color('green')] 
    
    randomColors = []
    for i in range(0, num):
        randomColors.append(colors[randint(0, len(colors)-1)])

    return randomColors


if __name__ == '__main__':
    colors = rand_colors_generator(int(input('Enter number of colors: ').strip()))
    output = sort_colors(colors)
    print(f'Unsorted => {colors}\n')
    print(f'Sorted => {output}')