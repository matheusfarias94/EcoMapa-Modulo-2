const { verify } = require("jsonwebtoken");

function validaToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json({ error: "Token não informado" });
    }

    const jwt = token.split(" ");
    const tokenValido = verify(jwt[1], process.env.JWT_SECRET);
    req.usuarioId = tokenValido.id;
    next();
  } catch (error) {
    if (error.message === "jwt malformed" || error.message === "jwt expired") {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    } else {
      return res.status(500).json({ mensagem: "Erro ao validar token", error });
    }
  }
}

module.exports = validaToken;
