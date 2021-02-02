/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vetSpec', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    veterinarianId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'veterinarian',
        key: 'id'
      }
    },
    specializationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'specialization',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'vetSpec',
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
        name: "FKvetSpec412007",
        using: "BTREE",
        fields: [
          { name: "veterinarianId" },
        ]
      },
      {
        name: "FKvetSpec397127",
        using: "BTREE",
        fields: [
          { name: "specializationId" },
        ]
      },
    ]
  });
};
