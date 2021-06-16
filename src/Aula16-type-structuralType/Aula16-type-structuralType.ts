// O typescript não liga pra identidade do tipo (User) e sim pro conteúdo {username: string; password: string;}

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// Não está explicitamente tipado

const bdUser = { username: 'joao', password: '123456' };
const sentUser = {
  username: 'joao',
  password: '123456',
  permissions: 'anything',
};

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
