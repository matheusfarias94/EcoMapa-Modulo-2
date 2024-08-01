const { Router } = require("express");
const localController = require("../controllers/LocalController");
const localRoutes = new Router();

localRoutes.post("/", localController.criarLocal);
localRoutes.get("/", localController.listarLocaisUsuarioLogado);
localRoutes.get("/:local_id", localController.listarLocalEspecificoUsuario);
localRoutes.delete("/:local_id", localController.deletarLocalUsuarioLogado);
localRoutes.put("/:local_id", localController.atualizarLocalUsuarioLogado);
localRoutes.get("/:local_id/mapa", localController.linkGoogleMaps);

module.exports = localRoutes;
