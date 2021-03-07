/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM('PENDING','CONFIMED','CANCELLED','APPROVED'),
      allowNull: true,
      defaultValue: "PENDING"
    },
    farmerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'farmer',
        key: 'id'
      }
    },
    veterinarianId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'veterinarian',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'appointment',
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
        name: "FKappointmen54299",
        using: "BTREE",
        fields: [
          { name: "veterinarianId" },
        ]
      },
      {
        name: "FKappointmen655267",
        using: "BTREE",
        fields: [
          { name: "farmerId" },
        ]
      },
    ]
  });
};
