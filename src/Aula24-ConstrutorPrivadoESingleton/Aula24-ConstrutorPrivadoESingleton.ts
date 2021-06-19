// Singleton - GoF | Factory method
// Ter somente uma instẫncia dessa classe

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  // Factory method
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2);

class Carro {
  static velMax = 320;

  private static carro: Carro;

  constructor(
    private _nome: string,
    private marca: string,
    private ano: number,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  // Factory method
  static getCar(_nome: string, marca: string, ano: number): Carro {
    if (Carro.carro) return Carro.carro;

    Carro.carro = new Carro(_nome, marca, ano);

    return Carro.carro;
  }
}

const c1 = Carro.getCar('Camaro', 'Chevrolet', 2011);
const c2 = Carro.getCar('BMW', 'Anything', 2011);

console.log(c1 === c2);
