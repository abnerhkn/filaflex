const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const SECRET_KEY = "%xebg_5b%gxc)r^8(ak$kp+9%9g-(t1=rm=xvnvfxw&f3)7$sf";

exports.login = (req, res) => {
    const { nome, senha } = req.body;

    db.get("SELECT * FROM usuarios WHERE nome = ?", [nome], (err, usuario) => {
        if (err) return res.status(500).json({ message: "Erro no banco de dados" });
        if (!usuario || !bcrypt.compareSync(senha, usuario.senha))
            return res.status(401).json({ message: "Credenciais inválidas" });

        const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    });
};

exports.registrar = (req, res) => {
    const { nome, senha } = req.body;
    const senhaHash = bcrypt.hashSync(senha, 8);

    db.run("INSERT INTO usuarios (nome, senha) VALUES (?, ?)", [nome, senhaHash], (err) => {
        if (err) return res.status(500).json({ message: "Erro ao registrar usuário" });
        res.json({ message: "Usuário registrado com sucesso!" });
    });
};
