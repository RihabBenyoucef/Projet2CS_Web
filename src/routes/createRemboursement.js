const { Remboursement } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.post('/api/remboursements', (req, res) => {
    Remboursement.create(req.body)
      .then(remboursement => {
        const message = `Le remboursement ${req.body.id} a bien été crée.`
        res.json({ message, data: remboursement })
      })
  })
}