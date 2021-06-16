enum Cores {
  VERMELHO, //0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores['VERMELHO']);
console.log(Cores[0]);
/* começar do 1
enum Cores {
  VERMELHO = 1, //0
  AZUL, // 1
  AMARELO, // 2
}*/

enum Direction {
  Up = 1,
  Down, //2
  Left, //3
  Right, //4
}

enum Cores2 {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

console.log(Cores);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores['AMARELO']);
console.log(Cores['AMARELO']);

enum Teste {
  a,
  b,
  c,
}

console.log(Teste);
