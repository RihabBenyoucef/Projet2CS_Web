const { Facture } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/factures/:id', (req, res) => {
    Facture.findByPk(req.params.id)
      .then(facture => {
        const message = 'Une facture a bien été trouvé.'
        res.json({ message, data: facture })
      })
  })
}