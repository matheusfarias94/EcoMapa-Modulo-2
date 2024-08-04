const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Usuario = require("../models/Usuario");

const Locais = connection.define("locais", {
  local_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nomeLocal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricaoLocal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  TipoResiduoAceito: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  linkMaps: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: "usuarios",
      key: "id",
    },
  },
});

Locais.belongsTo(Usuario, { foreignKey: "usuarioId" });

module.exports = Locais;
