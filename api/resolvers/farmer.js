module.exports = {
farms:async ({id},args,{models}) => await models.farm.findAll({where:{farmerId:id}}),
appointments:async ({id},args,{models}) =>await models.appointment.findAll({where:{farmerId:id}}),
}