/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animalDisease', {
    diseaseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'disease',
        key: 'id'
      }
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'animal',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'animalDisease',
    timestamps: false,
    indexes: [
      {
        name: "FKanimalDise453765",
        using: "BTREE",
        fields: [
          { name: "diseaseId" },
        ]
      },
      {
        name: "FKanimalDise728486",
        using: "BTREE",
        fields: [
          { name: "animalId" },
        ]
      },
    ]
  });
};
