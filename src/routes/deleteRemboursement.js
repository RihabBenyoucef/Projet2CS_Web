const { Remboursement } = require('../db/sequelize');
const remboursement = require('../models/remboursement');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/remboursements/:id', (req, res) => {
    Remboursement.findByPk(req.params.id).then(remboursement => {
      const remboursementDeleted = remboursement;
      remboursement.destroy({
        where: { id: remboursement.id }
      })
      .then(_ => {
        const message = `Le remboursement avec l'identifiant n°${remboursementDeleted.id} a bien été supprimé.`
        res.json({message, data: remboursementDeleted })
      })
    })
  })
}