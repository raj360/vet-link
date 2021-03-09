  const {gql} = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Query{
   test:String,
   getVets:Veterinarian,
   getVet(id:Int!):Veterinarian!,
   getFarmer(id:Int!):Farmer!,
 }

  type Mutation{
  name:String,
  singleUpload(file:Upload):String!,
  farmerSignUp(fullName:String!,telephone:String!,email:String!,profilePhoto:Upload,password:String!):Response!
  vetSignUp (fullName:String!,telephone:String!,email:String!,profilePhoto:Upload,password:String!):Response!
  vetSpecializations(veterinarianId:Int!,specializationId:[Int!]):Response!
  addSpecializations(list:[String!]!):Response!,
  farmerSignIn(telephone:String!,password:String!):Farmer,
  addFarm(name:String!,longitude:Float!,latitude:Float!,district:String!,farmerId:Int!,animalTypeId:Int!):Response!,
  vetSignIn(telephone:String!,password:String!):Veterinarian,
  addLocation(veterinarianId:Int!,longitude:Float!,latitude:Float!):Response!,
  createAppointment(farmerId:Int!,veterinarianId:Int!):Response!
  updateAppointment(id:Int!,status:String!):Response!
}


type Response{
  error:Boolean!,
  message:String!
}
  
type File{
  filename: String!
  mimetype: String!
  encoding: String!
}

type Veterinarian{
  id:Int!,
  fullName:String!,
  telephone:String!,
  email:String,
  photo:String!,
  specialization:[Specialisation],
  location:Location,
  appointments:[Appointment]
}

 type Specialisation{
  id:Int,
  name:String,
} 

 type Farmer{
   id:Int!,
   fullName:String!,
   telephone:String!,
   email:String!
   photo:String
   farms:[Farm]!
   appointments:[Appointment]
 }

 type Farm{
   id:Int!,
   name:String!,
   town:String!,
    district:String!,
  longitude:Float!,
  latitude:Float!,
  type:AnimalType
 }

 type Location{
  id:Int!,
  town:String!
  district:String!
  longitude:Float!,
  latitude:Float!,
 }

 type Appointment{
   id:Int!,
   vet:Veterinarian,
   farmer:Farmer
   status:String,
   createdAt:DateTime,
   updatedAt:DateTime,
 }

 type Animal{
   id:Int!,
   name:String!,
   type:AnimalType!,
 }

type AnimalType{
  id:Int!,
  name:String!,
}

type Disease{
  id:Int!,
  name:String,
  animals:[Animal]!
}

type DiseaseType{
  id:Int!,
  name:String
}

type Drug{
  id:Int!,
  name:String,
}

type Sign{
  id:Int!,
  name:String!,
}

type Remedy{
  id:Int!,
  disease:Disease!,
  sign:Sign!,
  drug:Drug!,
  article:String!,
  photo:String,
  createdAt:DateTime!,
  updatedAt:DateTime!
}
  `;
