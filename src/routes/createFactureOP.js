const { FactureOP } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/facturesOP', (req, res) => {
    FactureOP.create(req.body)
      .then(factureOP => {
        const message = `La facture de l'opérateur ${req.body.id} a bien été crée.`
        res.json({ message, data: factureOP })
      })
  })
}