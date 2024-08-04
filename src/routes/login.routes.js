const { Router } = require("express");
const loginController = require("../controllers/LoginController");
const loginRoutes = new Router();

loginRoutes.post("/", loginController.login
    /*
        #swagger.tags = ['Login']
        #swagger.description = 'Efetua o login'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Email e senha do usuario',
            type: 'object',
            required: true,
            schema: {
                $email:"usuario@gmail.com",
                $senha:"12345678"
            }
        }
    */
);

module.exports = loginRoutes;
