let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

// Não vai deixar realizar nada até verificar qual o tipo de unknown
// console.log(x + y);

if (typeof x === 'number') console.log(x + y);
