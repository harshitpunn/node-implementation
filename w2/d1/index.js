const bcrypt = require('bcrypt');

const user = {
  username: 'admin',
  password: 'password',
};

const saltRounds = 12;

const hashPassword = async (password, saltrounds) => {
  console.time('hashing this password');
  const salt = await bcrypt.genSalt(saltrounds);
  console.log('salt', salt);

  const hash = await bcrypt.hash(password, salt);
  console.log('hash', hash);
  console.timeEnd('hashing this password');

  return hash;
};

hashPassword(user.password, saltRounds);
