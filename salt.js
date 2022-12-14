const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function  signup(email, password) {
      const salt  = randomBytes(16).toString('hex');
      const hashedPassword  = scryptSync(password,  salt, 64);
      
      const user  = { email,  password: '${salt}:${hashedPassword}'}

      users.push(user);

      return  user
}

function  login(email,  password) {
      const user  = user.find(v =>  v.email === email);

      const [salt,  key]  = user.passwprd.split(':');
      const hashedBuffer  = scryptSync(password,  salt, 64);

      const keyBuffer = Buffer.from(key,  'hex');
      const match = timingSafeEqual(hashedBuffer, keyBuffer);
      
}