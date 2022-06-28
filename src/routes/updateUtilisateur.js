const { Utilisateur } = require('../db/sequelize')
const utilisateur = require('../models/utilisateur')
  
module.exports = (app) => {
  app.put('/api/utilisateurs/:id', (req, res) => {
    const id = req.params.id
    Utilisateur.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Utilisateur.findByPk(id).then(utilisateur => {
        const message = `L'utilisateur ${utilisateur.id} a bien été modifié.`
        res.json({message, data: utilisateur })
      })
    })
  })
}