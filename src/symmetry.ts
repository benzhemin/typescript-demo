export {}

function printSymmetry(begin: number, end: number) {
  const isSymmetry = (str: string) => str === Array.from(str).reverse().join('');

  Array.from({length:end}, (_, index) => index).filter(v => v>begin)
    .filter(v => isSymmetry(String(v)))
    .forEach(v => console.log(v));
}

printSymmetry(1, 10000);