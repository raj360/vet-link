var DataTypes = require("sequelize").DataTypes;
var _animal = require("./animal");
var _animalDisease = require("./animalDisease");
var _animalType = require("./animalType");
var _appointment = require("./appointment");
var _disease = require("./disease");
var _diseaseType = require("./diseaseType");
var _drug = require("./drug");
var _farm = require("./farm");
var _farmer = require("./farmer");
var _location = require("./location");
var _remedy = require("./remedy");
var _sign = require("./sign");
var _specialization = require("./specialization");
var _vetSpec = require("./vetSpec");
var _veterinarian = require("./veterinarian");

function initModels(sequelize) {
  var animal = _animal(sequelize, DataTypes);
  var animalDisease = _animalDisease(sequelize, DataTypes);
  var animalType = _animalType(sequelize, DataTypes);
  var appointment = _appointment(sequelize, DataTypes);
  var disease = _disease(sequelize, DataTypes);
  var diseaseType = _diseaseType(sequelize, DataTypes);
  var drug = _drug(sequelize, DataTypes);
  var farm = _farm(sequelize, DataTypes);
  var farmer = _farmer(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var remedy = _remedy(sequelize, DataTypes);
  var sign = _sign(sequelize, DataTypes);
  var specialization = _specialization(sequelize, DataTypes);
  var vetSpec = _vetSpec(sequelize, DataTypes);
  var veterinarian = _veterinarian(sequelize, DataTypes);

  animal.belongsTo(animalType, { foreignKey: "animalTypeId"});
  animalType.hasMany(animal, { foreignKey: "animalTypeId"});
  animalDisease.belongsTo(disease, { foreignKey: "diseaseId"});
  disease.hasMany(animalDisease, { foreignKey: "diseaseId"});
  animalDisease.belongsTo(animal, { foreignKey: "animalId"});
  animal.hasMany(animalDisease, { foreignKey: "animalId"});
  appointment.belongsTo(farmer, { foreignKey: "farmerId"});
  farmer.hasMany(appointment, { foreignKey: "farmerId"});
  appointment.belongsTo(veterinarian, { foreignKey: "veterinarianId"});
  veterinarian.hasMany(appointment, { foreignKey: "veterinarianId"});
  disease.belongsTo(diseaseType, { foreignKey: "diseaseTypeId"});
  diseaseType.hasMany(disease, { foreignKey: "diseaseTypeId"});
  farm.belongsTo(farmer, { foreignKey: "farmerId"});
  farmer.hasMany(farm, { foreignKey: "farmerId"});
  farm.belongsTo(animalType, { foreignKey: "animalTypeId"});
  animalType.hasMany(farm, { foreignKey: "animalTypeId"});
  location.belongsTo(veterinarian, { foreignKey: "veterinarianId"});
  veterinarian.hasMany(location, { foreignKey: "veterinarianId"});
  remedy.belongsTo(disease, { foreignKey: "diseaseId"});
  disease.hasMany(remedy, { foreignKey: "diseaseId"});
  remedy.belongsTo(sign, { foreignKey: "signId"});
  sign.hasMany(remedy, { foreignKey: "signId"});
  remedy.belongsTo(drug, { foreignKey: "drugId"});
  drug.hasMany(remedy, { foreignKey: "drugId"});
  vetSpec.belongsTo(veterinarian, { foreignKey: "veterinarianId"});
  veterinarian.hasMany(vetSpec, { foreignKey: "veterinarianId"});
  vetSpec.belongsTo(specialization, { foreignKey: "specializationId"});
  specialization.hasMany(vetSpec, { foreignKey: "specializationId"});

  return {
    animal,
    animalDisease,
    animalType,
    appointment,
    disease,
    diseaseType,
    drug,
    farm,
    farmer,
    location,
    remedy,
    sign,
    specialization,
    vetSpec,
    veterinarian,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
