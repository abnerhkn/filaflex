const jwt = require("jsonwebtoken");
const SECRET_KEY = "%xebg_5b%gxc)r^8(ak$kp+9%9g-(t1=rm=xvnvfxw&f3)7$sf";

function autenticarToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ message: "Acesso negado. Token não fornecido." });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Token inválido." });
        req.usuario = decoded;
        next();
    });
}

module.exports = autenticarToken;
