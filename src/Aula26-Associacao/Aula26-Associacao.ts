export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem ferramanta...');
      return;
    }
    this._ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

const escritor = new Escritor('Luiz');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina');

// Toda caneta ou maquina de escrever é uma Ferramenta
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();

/**
 * INVERSÃO DE DEPENDÊNCIA (DEPENDENCY INVERSION)
 * "Dependa de uma abstração e não de uma implementação."
 * Um escritor depende de ferramenta e não de uma caneta ou maquinaescrever
 * Ele depende de um contrato (Ferramenta abstract) ao invés de uma classe concreta
 *
 */
