const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");
const autenticarToken = require("../middlewares/authMiddleware");

router.post("/", categoriaController.criarCategoria);

router.get("/", categoriaController.listarCategorias);

router.delete("/:id", categoriaController.deletarCategoria);

module.exports = router;
