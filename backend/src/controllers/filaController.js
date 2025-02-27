let fila = [];
let senhaAtual = null;
let contador = 1;
const tipos = ["A", "B", "C"];

let filaAberta = false; // Variável de controle da fila

exports.gerarSenha = (req, res) => {
    if (!filaAberta) {
        return res.status(403).json({ message: "A fila está fechada. Aguarde a abertura para retirar senha." });
    }

    if (!req.io) return res.status(500).json({ message: "Erro no servidor de eventos" });

    const tipoAleatorio = tipos[Math.floor(Math.random() * tipos.length)];
    const senha = `${tipoAleatorio}${String(contador).padStart(3, "0")}`;

    fila.push(senha);
    contador++;

    req.io.emit("atualizarFila", { senhaAtual, fila, aberta: filaAberta });

    res.status(201).json({ senha });
};

exports.chamarProximo = (req, res) => {
    if (!req.io) return res.status(500).json({ message: "Erro no servidor de eventos" });

    if (fila.length === 0) {
        return res.status(400).json({ message: "Fila vazia" });
    }

    senhaAtual = fila.shift();

    if (fila.length === 0) {
        filaAberta = false;
    }

    req.io.emit("atualizarFila", { senhaAtual, fila, aberta: filaAberta });

    res.json({ senhaAtual });
};

exports.reiniciarFila = (req, res) => {
    fila = [];
    senhaAtual = null;
    contador = 1;
    filaAberta = false;

    req.io.emit("atualizarFila", { senhaAtual: null, fila: [], aberta: filaAberta });

    res.json({ message: "Fila reiniciada com sucesso!" });
};

exports.obterStatusFila = (req, res) => {
    res.json({ aberta: filaAberta });
};

exports.alternarFila = (req, res) => {
    filaAberta = !filaAberta;

    req.io.emit("atualizarFila", { senhaAtual, fila, aberta: filaAberta });

    res.json({ aberta: filaAberta, message: filaAberta ? "Fila aberta!" : "Fila fechada!" });
};
