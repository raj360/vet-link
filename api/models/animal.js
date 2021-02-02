/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal', {
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
    animalTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'animalType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'animal',
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
        name: "FKanimal858178",
        using: "BTREE",
        fields: [
          { name: "animalTypeId" },
        ]
      },
    ]
  });
};
