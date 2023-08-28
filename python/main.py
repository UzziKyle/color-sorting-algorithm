from random import randint, shuffle
from os import system as sys


class Color: # Thanks, Jian!
    def __init__(self, color: str) -> None:
        self.name = color
        self.visual = {
            'red': '❤️ ', 
            'white': '⚪ ',
            'blue': '🔷 ',
            'green': '🍀 ',
        }[color]

    def __str__(self) -> str:
        return self.name

    def __repr__(self) -> str:
        return self.visual
    

class ColorsArray:
    def __init__(self, length: int) -> None:
        self.length = min_max(length=length)
        self.colors = rand_colors_generator(num=self.length)

    def sort(self) -> list:
            colors_copy = self.colors.copy()

            sorting = list(map(
                str.strip, 
                input('Enter the order of colors(separated by commas): ').split(',')
                ))

            sorted_colors = []
            for color_to_match in sorting:
                grouped_colors = [color for color in colors_copy if color_to_match == color.name] 

                sorted_colors.extend(grouped_colors)

            return sorted_colors


def min_max(length: int, min: int = 2, max: int = 10) -> int:
    if length < min:
        length = min

        return length
    
    elif length > max:
        length = max

        return length
    
    else:
        return length
    

def rand_colors_generator(num: int, min: int = 2) -> list:
    colors = [Color('red'), Color('white'), Color('blue'), Color('green')] 

    if num <= len(colors):
        if num < min: 
            num = min
        
        shuffle(colors)
        random_colors = [color for color in colors[:num]]

        return random_colors

    random_colors = [color for color in colors]
    random_colors.extend([colors[randint(0, len(colors)-1)] for i in range(0, num-len(colors))])

    shuffle(random_colors)

    return random_colors


def main() -> None:
    colors = ColorsArray(length=int(input('Enter number of colors: ').strip()))

    print(f'Unsorted => {colors.colors}\n')
    print(f'Sorted => {colors.sort()}')


if __name__ == '__main__':
    sys('cls')
    main()