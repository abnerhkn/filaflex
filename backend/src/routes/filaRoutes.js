const express = require("express");
const router = express.Router();
const filaController = require("../controllers/filaController");

router.get("/status", filaController.obterStatusFila);
router.post("/toggle", filaController.alternarFila);
router.post("/gerar-senha", filaController.gerarSenha);
router.post("/chamar-proximo", filaController.chamarProximo);
router.post("/reiniciar-fila", filaController.reiniciarFila);

module.exports = router;
