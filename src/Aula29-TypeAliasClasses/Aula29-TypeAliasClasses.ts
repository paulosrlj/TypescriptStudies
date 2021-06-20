type TipoNome = {
  nome: string;
};

type TipoPessoa = {
  sobrenome: string;
  // nomeCompleto(): string;

  nomeCompleto: () => string;
};

// export abstract class TipoPessoa {
//   protected abstract nome: string;
//   protected abstract sobrenome: string;
//   protected abstract nomeCompleto(): string;
// }

export class Pessoa implements TipoPessoa, TipoNome {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
