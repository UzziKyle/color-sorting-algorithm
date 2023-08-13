# Thank you, Jian!
class Color:
    def __init__(self, color) -> None:
        self.color = color

    def __str__(self) -> str:
        return self.color
    
    def __repr__(self) -> str:
        return {
            'red': '❤️ ', 
            'white': '⚪ ',
            'blue': '🔷 ',
            'green': '🍀 ',
        }[self.color]
    
    def value(self):
        return {
            'red': 0, 
            'white': 1,
            'blue': 2,
            'green': 3,
        }[self.color]

def sortColors(colors=list) -> list: # insertion-sort algorithm
    for i in range(1, len(colors)):
        key_item = colors[i]

        j = i - 1

        while j >= 0 and colors[j].value() > key_item.value():
            colors[j + 1] = colors[j]
            j -= 1

        colors[j+1] = key_item

    return [color for color in colors]

red = Color('red')
white = Color('white')
blue = Color('blue')
green = Color('green')

colors = [blue, blue, green, blue, white, red, white, red]
print(f'Unsorted => {colors}\n')

output = sortColors(colors)
print(f'Sorted => {output}')