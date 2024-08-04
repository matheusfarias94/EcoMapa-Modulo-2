"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locais", {
      local_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nomeLocal: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      descricaoLocal: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      cep: {
        type: Sequelize.STRING(8),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      TipoResiduoAceito: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      latitude: {
        type: Sequelize.FLOAT(10, 6),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT(10, 6),
        allowNull: false,
      },

      linkMaps: {
        type: Sequelize.STRING(255),
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locais");
  },
};
