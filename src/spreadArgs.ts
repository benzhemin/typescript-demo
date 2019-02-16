function displayColors(message: string, ...colors: string[]) {
  console.log(message);
  console.log(colors);
  console.log(arguments.length);

  for (const color of colors) {
    console.log(color);
  }
}

const message = 'list of colors';

const colorList = ['red', 'orange', 'indigo'];
displayColors(message, ...colorList);
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');