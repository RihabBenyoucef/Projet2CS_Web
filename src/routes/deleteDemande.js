const { Demande } = require('../db/sequelize');
const demande = require('../models/demande');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/demandes/:id', (req, res) => {
    Demande.findByPk(req.params.id).then(demande => {
      const demandeDeleted = demande;
      demande.destroy({
        where: { id: demande.id }
      })
      .then(_ => {
        const message = `La demande avec l'identifiant n°${demandeDeleted.id} a bien été supprimé.`
        res.json({message, data: demandeDeleted })
      })
    })
  })
}