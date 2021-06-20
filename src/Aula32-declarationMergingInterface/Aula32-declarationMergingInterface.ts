interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av.brasil'],
  idade: 30,
};

pessoa.idade = 32;

console.log(pessoa);
