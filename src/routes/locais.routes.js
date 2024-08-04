const { Router } = require("express");
const localController = require("../controllers/LocalController");
const localRoutes = new Router();

localRoutes.post("/",localController.criarLocal
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Cria um novo local' 
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Se o cep for valido,retorna o endereco,latitude,longitude e link do google maps,caso contrario preencha todos os campos',
            type: 'object',
            required: true,
            schema: {
                $nomeLocal:"Lagoa da Conceição",
                $descricaoLocal :" Proximo a avenida das rendeiras,numero 123",
                $cep:"12345678",
                $TipoResiduoAceito:'Plastico',
                $endereco:"Cidade, Estado",
                $latitude:"-23.5489",
                $longitude:"-46.6556"
            }
        }
    */
);

localRoutes.get("/",localController.listarLocaisUsuarioLogado
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Listar todos os locais cadastrados pelo usuario'
        
    */
);

localRoutes.get("/:local_id",localController.listarLocalEspecificoUsuario
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Listar local especifico cadastrado pelo usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }
    */
);

localRoutes.delete("/:local_id", localController.deletarLocalUsuarioLogado
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Deleta um local especifico cadastrado pelo usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }

    */
);

localRoutes.put("/:local_id",localController.atualizarLocalUsuarioLogado
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Atualiza um local especifico cadastrado pelo usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }
        #swagger.parameters['body'] = {
            in: 'body',
            type: 'object',
            schema: {
                $nomeLocal:"Lagoa da Conceição",
                $descricaoLocal :" Proximo a avenida das rendeiras,numero 123",
                $TipoResiduoAceito:'Plastico',
                $cep:"12345678",
                $endereco:"Cidade, Estado",
                $TipoResiduoAceito:'Plastico',
                $latitude:"-23.5489",
                $longitude:"-46.6389", 
                $linkMaps:"https://www.google.com/maps?q=-8.99218752,-39.9052332"
            }
        }

    */
);

localRoutes.get("/:local_id/mapa",localController.linkGoogleMaps
    /*
        #swagger.tags = ['Locais']
        #swagger.description = 'Listar o link do Google Maps de um local especifico cadastrado pelo usuario'
        #swagger.parameters['local_id'] = {
            in: 'path',
            description: 'Id do local',
            type: 'string',
            required: true
        }
    */
);

module.exports = localRoutes;
