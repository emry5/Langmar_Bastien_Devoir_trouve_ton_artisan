const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    specialite: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    categorie: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    localisation: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    siteWeb: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "artisans",
    timestamps: true,
  }
);

module.exports = Artisan;