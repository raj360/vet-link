/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('remedy', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    article: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photoUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    diseaseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'disease',
        key: 'id'
      }
    },
    signId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'sign',
        key: 'id'
      }
    },
    drugId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'drug',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'remedy',
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
        name: "FKremedy840449",
        using: "BTREE",
        fields: [
          { name: "diseaseId" },
        ]
      },
      {
        name: "FKremedy557945",
        using: "BTREE",
        fields: [
          { name: "signId" },
        ]
      },
      {
        name: "FKremedy260206",
        using: "BTREE",
        fields: [
          { name: "drugId" },
        ]
      },
    ]
  });
};
