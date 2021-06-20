export abstract class Pessoa {
  protected abstract classe: string;

  constructor(
    private _nome: string,
    private _vida: number,
    private _ataque: number,
  ) {}
}

export class Mago extends Pessoa {
  protected classe = 'Mago';
}
