const bcrypt = require("bcryptjs");
const db = require("./db.js");

db.all("SELECT id, senha FROM usuarios", [], (err, rows) => {
    if (err) throw err;

    rows.forEach(user => {
        if (!user.senha.startsWith("$2a$")) { 
            const senhaHash = bcrypt.hashSync(user.senha, 8);
            db.run("UPDATE usuarios SET senha = ? WHERE id = ?", [senhaHash, user.id], (updateErr) => {
                if (updateErr) throw updateErr;
                console.log(`🔑 Senha do usuário ${user.nome} atualizada!`);
            });
        }
    });
});
