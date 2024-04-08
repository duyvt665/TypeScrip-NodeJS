require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

//check authen isAdmin
function authenticateAndAuthorizeToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
    if (err) return res.sendStatus(403);

    // Kiểm tra hạn sử dụng của token
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decodedToken.exp < currentTimestamp) {
      return res.status(401).json({ message: "Token expired" });
    }

    // Kiểm tra giá trị isAdmin
    if (!decodedToken.isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    req.user = decodedToken;
    next();
  });
}

module.exports = authenticateAndAuthorizeToken;


module.exports = {
  authenticateToken,
  authenticateAndAuthorizeToken,
};
