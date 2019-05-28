function repeat(n: number, s: string) {
  return Array(n).fill(0).map(_ => s).join('');
}

const hello = repeat(5, 'hello');
console.log(`repeat ${hello}`);


