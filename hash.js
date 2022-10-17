const { createHash  } = require ('crypto');

//create a string hash 

function  hash(input) {
      return createHash('sha256').update(input).digest('hex');
}

let password  = 'hi Lix';
const hash1 =hash(password);
console.log(hash1)

