
const fs = require('fs');
const path = require('path');
const {AuthenticationError} = require('apollo-server-express')

const storeFS =async ({ stream, filename }) => {
    const uploadDir = '../uploads/profile-photos/';
    filename = `${Date.now()}-${filename.toLowerCase() }`
    const fileName = path.join(__dirname,uploadDir,filename);

    return await new Promise((resolve, reject) =>
        stream.on('error', error => {
                if (stream.truncated) // delete the truncated file
                  fs.unlinkSync(fileName);
                  reject(error);
            })
            .pipe(fs.createWriteStream(fileName))
            .on('error', error => reject(error))
            .on('finish', () => resolve({ filename }))
    );
}

module.exports = {
  name:()=> 'my name is is Willsley 💡 ',
  singleUpload:async (parent,{file},context)=>{

    const { filename, mimetype, createReadStream } = await file;
    const stream = createReadStream();
    const pathObj = await storeFS({ stream, filename });

     const fileLocation = pathObj.fileName;

 return fileLocation;

},

farmerSignUp:async(parent,{fullName,telephone,email,profilePhoto,password},{models})=>{
 

   try {
    if(profilePhoto){
    //saving image to file system
    const { filename, mimetype, createReadStream } = await profilePhoto;
    const stream = createReadStream();
    const result = await storeFS({ stream, filename });
    const photo = result.filename;
  
    let farmer =await models.farmer.create({fullName,telephone,email,profilePhoto,password,photo});
      return {
      message:"Account created Successfully",
      error:true
      }
     
   }else{
    let farmer =await models.farmer.create({fullName,telephone,email,profilePhoto,password});
    return {
      message:"Account created Successfully",
      error:true
      }
   }
   } catch (error) {
      return {
      message:"Duplicated telephone number",
      error:true
      }
   }

},
vetSignUp:async(parent,{fullName,telephone,email,profilePhoto,password},{models})=>{
 
   try {
    if(profilePhoto){
    //saving image to file system
    const { filename, mimetype, createReadStream } = await profilePhoto;
    const stream = createReadStream();
    const result = await storeFS({ stream, filename });
    const photo = result.filename;
  
    let vet =await models.veterinarian.create({fullName,telephone,email,profilePhoto,password,photo});
      return {
      message:"Account created Successfully",
      error:false
      }
     
   }else{
    let farmer =await models.veterinarian.create({fullName,telephone,email,profilePhoto,password});
    return {
      message:"Account created Successfully",
      error:false
      }
   }
     
   } catch (error) {
      return {
      message:"Duplicated telephone number",
      error:true
      }
   }

},
vetSpecializations:async (parent,{specializationId,veterinarianId},{models}) => {
  const runQuery = async ({veterinarianId,specializationId}) => await models.vetSpec.create({veterinarianId,specializationId})
   await  specializationId.forEach(specializationId => runQuery({specializationId,veterinarianId}));
   return {
     error:false,
     message:'created successfully'
   }
}
,
addSpecializations:async (parent,{list},{models}) => {
  let result =  await  models.specialization.bulkCreate([{name:"Poultry"},{name:"Emergency and Critical Care"},{name:"Internal Medicine"},{name:"Nutrition"},{name:"Pharmacolology"},{name:"Dentistry"},{name:"Dermatology"},{name:"Laboratory Medicine"},{name:"Ophthalmology"}]);
  if(result){
    return {error:false,message:'created Successfully'}
  }else{
    return {error:true,message:'Error occurred'}
  }
},
farmerSignIn:async (parent,{telephone,password},{models}) => {

      const farmer = await models.farmer.findOne({where:{telephone,password}})

      if(!farmer){
         throw new AuthenticationError("telehone or password is unknown")
      }
      return farmer;
},
vetSignIn:async (parent,{telephone,password},{models}) => {
  
  const veterinarian = await models.veterinarian.findOne({where:{telephone,password}});
  if(!veterinarian){
  throw new AuthenticationError("telehone or password is unknown")
  }
  return veterinarian;
},
addLocation:async (parent,{veterinarianId,longitude,latitude},{models}) => {
  try {
    let location = await  models.location.create({veterinarianId,longitude,latitude});
     return {
      error:false,
      message:'created Successfully'
    }
  } catch (error) {
    return {
      error:true,
      message:'error occurred'
    }
  }
},
addFarm:async (parent,{name,longitude,latitude,district,farmerId,animalTypeId},{models}) => {
  try {
    let farm = await models.farm.create({name,longitude,latitude,district,farmerId,animalTypeId});
    return {
      error:false,
      message:'created Successfully'
    }
  } catch (error) {
    return {
      error:true,
      message:'error occurred'
    }
  }
},
createAppointment:async (parent,{farmerId,veterinarianId},{models}) => {
  try {
    let appointment = await models.appointment.create({farmerId,veterinarianId});
    return {
      error:false,
      message:'Create successfully'
    }
  } catch (error) {
    return {
      error:true,
      message:'error occurred'
    }
  }
},
updateAppointment:async (parent,{id,status},{models}) => {
  try {
    await models.appointment.update({status},{where:{id}});
    return {
      error:false,
      message:'updated successfully'
    }
  } catch (error) {
    console.log(error)
    return {
      error:true,
    message:'error occurred'
    }
  }
}


}



  



