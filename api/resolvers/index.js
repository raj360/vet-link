const Mutation = require('./mutation');
const Query = require('./query');
const Veterinarian = require('./veterinarian');
const Farmer = require('./farmer');
const Farm = require('./farm');
const Appointment = require('./appointment');
const {GraphQLDateTime}  = require('graphql-iso-date')

module.exports={
  Mutation,
  Query,
  Farmer,
  Farm,
  Appointment,
  Veterinarian,
  DateTime:GraphQLDateTime,
}