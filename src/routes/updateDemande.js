const { Demande } = require('../db/sequelize')
const demande = require('../models/demande')
  
module.exports = (appTuto) => {
  appTuto.put('/api/demandes/:id', (req, res) => {
    const id = req.params.id
    Demande.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Demande.findByPk(id).then(demande => {
        const message = `La demande ${demande.id} a bien été modifié.`
        res.json({message, data: demande })
      })
    })
  })
}