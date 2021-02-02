module.exports = {
  type:async ({animalTypeId},args,{models})=> await models.animalType.findOne({where:{id:animalTypeId}})
}