const { Facture } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/factures', (req, res) => {
    Demande.findAll()
      .then(factures => {
        const message = 'La liste des factures a bien été récupérée.'
        res.json({ message, data: factures })
      })
  })
}