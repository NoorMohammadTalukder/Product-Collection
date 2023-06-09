const jwt = require("jsonwebtoken");

//--- generate token
function generateToken(userId, secretKey) {
  const token = jwt.sign({ userId }, secretKey);
  return token;
}
const token1 = generateToken("demo_user_id", "demo_key_for_assignment");
console.log(token1);

//--- verify token
function authenticate(req, res, next) {
  const token = req.headers.token;
  // console.token(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, "demo_key_for_assignment");
    // console.log(decoded.userId)
    // console.log("ok");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = authenticate;
