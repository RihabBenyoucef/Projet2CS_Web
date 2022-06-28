const { Facture } = require('../db/sequelize');
const facture = require('../models/facture');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/factures/:id', (req, res) => {
    Facture.findByPk(req.params.id).then(facture => {
      const factureDeleted = facture;
      facture.destroy({
        where: { id: facture.id }
      })
      .then(_ => {
        const message = `La facture avec l'identifiant n°${factureDeleted.id} a bien été supprimé.`
        res.json({message, data: factureDeleted })
      })
    })
  })
}