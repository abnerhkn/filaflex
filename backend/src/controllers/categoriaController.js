const db = require("../config/db");

exports.criarCategoria = (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "O nome da categoria é obrigatório." });
    }

    db.run("INSERT INTO categorias_atendimento (nome) VALUES (?)", [nome], function (err) {
        if (err) {
            return res.status(500).json({ erro: "Erro ao criar categoria.", detalhes: err.message });
        }
        res.status(201).json({ id: this.lastID, nome });
    });
};

exports.listarCategorias = (req, res) => {
    db.all("SELECT * FROM categorias_atendimento", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ erro: "Erro ao buscar categorias.", detalhes: err.message });
        }
        res.status(200).json(rows);
    });
};

exports.deletarCategoria = (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM categorias_atendimento WHERE id = ?", [id], function (err) {
        if (err) {
            return res.status(500).json({ erro: "Erro ao excluir categoria.", detalhes: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada." });
        }
        res.status(200).json({ mensagem: "Categoria excluída com sucesso." });
    });
};
