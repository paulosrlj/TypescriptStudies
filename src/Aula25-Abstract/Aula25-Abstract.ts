// Não pode ser instanciada diretamente
export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`);
  }

  // É um contrato que todas as classes filhas deve seguir e implementar
  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + 'GUERREIRA AO ATAQUEEEEEE');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(this.emoji + 'AGRAGAGUSAHGUSAHGAGASGAS');
  }
}

const guerreira = new Guerreira('Guerreira', 120, 800);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
