const { Remboursement } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/remboursements', (req, res) => {
    Remboursement.findAll()
      .then(remboursements => {
        const message = 'La liste des remboursements a bien été récupérée.'
        res.json({ message, data: remboursements })
      })
  })
}