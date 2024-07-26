const { Router } = require("express");
const usuariosController = require("../controllers/UsuarioController");

const usuariosRoutes = new Router();
usuariosRoutes.post("/", usuariosController.criarUsuario);
usuariosRoutes.get("/", usuariosController.listarUsuarios);

module.exports = usuariosRoutes;
