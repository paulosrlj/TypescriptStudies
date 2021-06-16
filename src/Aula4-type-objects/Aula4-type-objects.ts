const objectoA: {
  chaveA: string;
  readonly chaveB: string;
  chaveC?: string;
  [key: string]: unknown; //
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectoA.chaveA = 'Outro valor';
// objectoA.chaveB = 'Outro valor'; //Não pode -> readonly
// objectoA.chaveC = 'Nova chave'; -> não pode
