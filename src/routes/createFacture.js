const { Facture } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/factures', (req, res) => {
    Facture.create(req.body)
      .then(facture => {
        const message = `La facture du trajet numéro ${req.body.idTrajet} a bien été crée.`
        res.json({ message, data: facture })
      })
  })
}