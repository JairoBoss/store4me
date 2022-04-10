require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token)
    return res.status(401).send("Acceso denegado");

  try {
    token = token.split(" ")[1];

    if (token === "null" || !token)
      return res.status(401).send("¿Que haces aqui?");

    let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET); 
    if (!verifiedUser) return res.status(401).send("Acceso denegado");

    req.user = verifiedUser; 
    next();
  } catch (error) {
    res.status(400).send("Token invalido");
  }
};
