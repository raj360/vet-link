/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farm', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    longitude: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    district: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    farmerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'farmer',
        key: 'id'
      }
    },
    animalTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'animalType',
        key: 'id'
      }
    },
    town: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'farm',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FKfarm522950",
        using: "BTREE",
        fields: [
          { name: "farmerId" },
        ]
      },
      {
        name: "FKfarm860033",
        using: "BTREE",
        fields: [
          { name: "animalTypeId" },
        ]
      },
    ]
  });
};
