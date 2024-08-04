const { Router } = require("express");
const usuariosController = require("../controllers/UsuarioController");

const usuariosRoutes = new Router();12345678910
usuariosRoutes.post("/", usuariosController.criarUsuario
    /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Cria um novo usuario'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Nome, email, senha,cpf,sexo,endereco,data de nascimento',
            type: 'object',
            required: true,
            schema: {
                $nome:"Nome do usuario",
                $email:"email do usuario",
                $senha:"12345678",
                $cpf:"12345678910",
                $sexo:"masculino ou feminino",
                $endereco:"Rua Egidio Abelino,865,biguacu,SC",
                $dataNascimento:"01/01/2000"
            }
        }

    */
);
usuariosRoutes.get("/", usuariosController.listarUsuarios
    /*
        #swagger.tags = ['Usuarios']
        #swagger.description = 'Listar todos os usuarios ativos'
        
    */

);

module.exports = usuariosRoutes;
