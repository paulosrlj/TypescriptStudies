// Condicional -> body pode não estar na tela
/* Recomendado */
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// type assertion -> body sempre vai estar
const body3 = document.querySelector('body') as HTMLBodyElement;
if (body3) body3.style.background = 'red';

const input = document.querySelector('.imput') as HTMLInputElement;

/* Não recomendado */

// Nom-null assertion(!) o objeto não vai ser nulo
const body2 = document.querySelector('body')!;
if (body2) body2.style.background = 'red';

// HTMLElement

// type assertion -> body sempre vai estar
const body4 = document.querySelector('body') as unknown as number;
