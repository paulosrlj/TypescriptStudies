export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    // O nome "cpf" da conflito com o getter e setter, adicione um _ então
    private _cpf: string,
  ) {}

  // getCpf(): string {
  //   return this.cpf.replace(/\D/g, '');
  // }

  // setCpf(valor: string): void {
  //   this.cpf = valor;
  // }

  // Getters e setter n aceitam tipo de retorno
  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');

// Jeito antigo de acessar
// pessoa.setCpf('900.000.000-00');
// pessoa.getCpf();

// Jeito mais atual
pessoa.cpf = '111.111.111-11';
console.log(pessoa.cpf);

console.log(pessoa);
