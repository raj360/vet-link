module.exports = {
specialization:async ({id},args,{models}) => {
  const  result  =  await models.vetSpec.findAll({where:{veterinarianId:id},include:[models.specialization]});
  return await  result.map(spec => spec.get('specialization'));
},
location:async ({id},args,{models}) => await models.location.findOne({veterinarianId:id}),
appointments:async ({id},args,{models}) =>await models.appointment.findAll({where:{veterinarianId:id}}),
}