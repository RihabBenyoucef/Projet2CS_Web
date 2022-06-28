const { Remboursement } = require('../db/sequelize')
  
module.exports = (appTuto) => {
  appTuto.get('/api/remboursements/:id', (req, res) => {
    Remboursement.findByPk(req.params.id)
      .then(remboursement => {
        const message = 'Un remboursement a bien été trouvé.'
        res.json({ message, data: remboursement })
      })
  })
}