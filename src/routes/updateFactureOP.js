const { FactureOP } = require('../db/sequelize')
const factureOP = require('../models/factureOP')
const factureOP = require('../models/factureOP')
  
module.exports = (appTuto) => {
  appTuto.put('/api/facturesOP/:id', (req, res) => {
    const id = req.params.id
    FactureOP.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      FactureOP.findByPk(id).then(factureOP => {
        const message = `La facture  ${factureOP.id} faite par l'opérateur a bien été modifié.`
        res.json({message, data: factureOP })
      })
    })
  })
}