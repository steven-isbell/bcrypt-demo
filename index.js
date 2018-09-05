const bcrypt = require('bcryptjs');

const myPass = 'iliekturtlez'; // Should be some user input received on request

// Synchronous
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(myPass, salt);

const isPassword = bcrypt.compareSync(myPass, hash);
const isNotPassword = bcrypt.compareSync('sum1337p@ss', hash);

// Async
bcrypt.genSalt(10).then((err, salt) => {
  bcrypt.hash(myPass, salt).then((err, hash) => {
    console.log('Stored To DB');
  });
});

bcrypt.compare(myPass, hash).then(res => {
  // Correct Password, forward user to profile or other page
});

console.log(hash);
console.log(isPassword);
console.log(isNotPassword);
