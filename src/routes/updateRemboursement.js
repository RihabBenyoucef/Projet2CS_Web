const { Remboursement } = require('../db/sequelize')
const remboursement = require('../models/remboursement')
  
module.exports = (appTuto) => {
  appTuto.put('/api/remboursements/:id', (req, res) => {
    const id = req.params.id
    Remboursement.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Remboursement.findByPk(id).then(remboursement => {
        const message = `Le remboursement ${remboursement.id} a bien été modifié.`
        res.json({message, data: remboursement })
      })
    })
  })
}