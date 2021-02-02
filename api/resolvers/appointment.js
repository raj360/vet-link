module.exports = {
farmer:async ({farmerId},args,{models}) => await  models.farmer.findOne({where:{id:farmerId}}),
vet:async ({veterinarianId},args,{models}) => await models.veterinarian.findOne({where:{id:veterinarianId}})
}