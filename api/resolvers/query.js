module.exports = {
  test:()=> 'testing if this is working just fine',
  getVets:async (parent,args,{models}) => models.veterinarian.findAll(),
  getFarmer:async (parent,{id},{models}) => models.farmer.findOne({where:{id}}),
  getVet:async (parent,{id},{models}) => models.veterinarian.findOne({where:{id}}),
}