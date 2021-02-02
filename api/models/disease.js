/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disease', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "name"
    },
    diseaseTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'diseaseType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'disease',
    timestamps: false,
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "FKdisease159029",
        using: "BTREE",
        fields: [
          { name: "diseaseTypeId" },
        ]
      },
    ]
  });
};
