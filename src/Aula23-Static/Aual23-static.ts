export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  static falaOi(): void {
    console.log('Oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa);
Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
