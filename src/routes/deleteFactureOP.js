const { FactureOP } = require('../db/sequelize');
const factureOP = require('../models/factureOP');
  
module.exports = (appTuto) => {
  appTuto.delete('/api/facturesOP/:id', (req, res) => {
    FactureOP.findByPk(req.params.id).then(factureOP => {
      const factureOPDeleted = factureOP;
      factureOP.destroy({
        where: { id: factureOP.id }
      })
      .then(_ => {
        const message = `La facture avec l'identifiant n°${factureDeleted.id} de l'opérateur a bien été supprimé.`
        res.json({message, data: factureOPDeleted })
      })
    })
  })
}