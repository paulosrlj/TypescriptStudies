// generics
// Array<T> - T[]

function multiplicaArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1);
}

function concatenaString(...args: Array<string>): string {
  return args.reduce((acc, valor) => acc + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
