const jwt = require('jsonwebtoken');
function generateToken(userId, secretKey) {
  const token = jwt.sign({ userId }, secretKey);
  return token;
}
const token = generateToken('demo_user', 'demo_key_for_assignment');
console.log(token);
