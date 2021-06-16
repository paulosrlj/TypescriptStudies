type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarela' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Paulo',
  idade: 20,
  salario: 3000,
};

const cor1: CorPreferida = 'Amarela';

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
