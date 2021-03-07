/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    longitude: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    veterinarianId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'veterinarian',
        key: 'id'
      }
    },
    district: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location',
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
        name: "FKlocation125018",
        using: "BTREE",
        fields: [
          { name: "veterinarianId" },
        ]
      },
    ]
  });
};
