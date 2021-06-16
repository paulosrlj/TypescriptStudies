// Uma função que nunca retorna nada
function criaErro(): never {
  throw new Error('Erro qualquer');
}

criaErro();
