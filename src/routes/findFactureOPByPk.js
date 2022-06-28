const { FactureOP } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/facturesOP/:id', (req, res) => {
    FactureOP.findByPk(req.params.id)
      .then(factureOP => {
        const message = 'Une facture faite par un opérateur a bien été trouvé.'
        res.json({ message, data: factureOP })
      })
  })
}