const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) console.error("Erro ao conectar ao banco de dados:", err);
    else console.log("Banco de dados conectado com sucesso.");
});

db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
)`);

db.run(`CREATE TABLE IF NOT EXISTS categorias_atendimento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE
)`);

db.run(`CREATE TABLE IF NOT EXISTS senhas_atendimento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria_id INTEGER NOT NULL,
    codigo TEXT NOT NULL UNIQUE,  
    FOREIGN KEY (categoria_id) REFERENCES categorias_atendimento(id)
)`);

module.exports = db;
