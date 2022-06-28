const { Facture } = require('../db/sequelize')
const facture = require('../models/facture')
  
module.exports = (appTuto) => {
  appTuto.put('/api/factures/:id', (req, res) => {
    const id = req.params.id
    Facture.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      Facture.findByPk(id).then(facture => {
        const message = `La facture ${facture.id} a bien été modifié.`
        res.json({message, data: facture })
      })
    })
  })
}