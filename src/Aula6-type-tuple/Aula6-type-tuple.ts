const dadosCliente: [number, string] = [1, 'Luiz'];
const dadosCliente2: readonly [number, string, string?] = [1, 'Luiz', 'Sérgio'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Luiz', 'Sérgio'];

dadosCliente[0] = 100;
dadosCliente[1] = 'Paulo';

console.log(dadosCliente);
console.log(dadosCliente2);

const array: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

let arr3: [number, string];

arr3 = [19, 'Paulo']; // eslint-disable-line
